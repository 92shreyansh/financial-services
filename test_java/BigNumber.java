
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * BigNumber class which represents an exact number of unlimited decimal extent.
 * The representation of the whole part is a BigInteger.
 * The representation of the decimal part is as a true decimal (not binary)
 * number.
 */
public class BigNumber extends Number {

    public static void main(String[] args) {
        // BigNumber t = new BigNumber(BigInteger.valueOf(2), new int[] { 1, 2, 3 }, true);
        long s1 = System.currentTimeMillis();
        BigNumber piSquared = BigNumber.pi.multiplyK(BigNumber.pi);
        long e1 = System.currentTimeMillis();
        System.out.println("karatsuba time: "+ (e1-s1));

        long s2 = System.currentTimeMillis();
        BigNumber piSquared2 = BigNumber.pi.multiply(BigNumber.pi);
        long e2 = System.currentTimeMillis();
        System.out.println("normal time: "+ (e2-s2));

        // String expected = "9.869604401089358618834490999876151135313699407240790626413349376220044822419205243001773403718552225653007487119222379933851745525268070040321103742979861060062160525374811732041221722760637532682489";
        System.out.println(piSquared2.equals(piSquared));
        System.out.println(piSquared2.toString());
        System.out.println(piSquared.toString());


    }

    public BigNumber multiplyK(BigNumber that) {
        // whole multiplication
        BigNumber thisW = BigNumber.value(this.whole);
        BigNumber thatW = BigNumber.value(that.whole);

        BigNumber thisF = new BigNumber(BigInteger.ZERO, this.decimals, true);
        BigNumber thatF = new BigNumber(BigInteger.ZERO, that.decimals, true);

        BigNumber result1 = thisW.multiply(thatW);
        BigNumber result2 = thisW.multiply(thatF);
        BigNumber result3 = thatW.multiply(thisF);
        BigNumber result4 = thisF.multiplyK2(thatF);

        return result1.add(result2).add(result3).add(result4);

    }

    private BigNumber multiplyK2(BigNumber thatDec) {
        int n = Math.max(thatDec.decimals.length, thatDec.decimals.length);
        if (n <= 20)
            return this.multiply(thatDec);
        int half = (n + 1) / 2;
        int[] xLow = Arrays.copyOfRange(this.decimals, 0, half);
        int[] xHigh = Arrays.copyOfRange(this.decimals, half, this.decimals.length);
        int[] yLow = Arrays.copyOfRange(thatDec.decimals, 0, half);
        int[] yHigh = Arrays.copyOfRange(thatDec.decimals, half, thatDec.decimals.length);

        BigNumber xLow1 = new BigNumber(BigInteger.ZERO, xLow, true);
        BigNumber xHigh1 = new BigNumber(BigInteger.ZERO, xHigh, true);
        BigNumber yLow1 = new BigNumber(BigInteger.ZERO, yLow, true);
        BigNumber yHigh1 = new BigNumber(BigInteger.ZERO, yHigh, true);

        BigNumber z0 = xLow1.multiplyK2(yLow1);
        BigNumber sumX = xLow1.add(xHigh1);
        BigNumber sumY = yLow1.add(yHigh1);
        BigNumber z1 = sumX.multiplyK2(sumY);
        BigNumber z2 = xHigh1.multiplyK2(yHigh1);

        z1 = z1.add(z2.negate()).add(z0.negate());

        int[] d1 = new int[half * 2];
        d1[(half * 2) - 1] = 1;
        BigNumber p1 = new BigNumber(BigInteger.ZERO, d1, true);

        int[] d2 = new int[half];
        d2[half - 1] = 1;
        BigNumber p2 = new BigNumber(BigInteger.ZERO, d2, true);

        BigNumber result = z2.multiply(p1).add(z1.multiply(p2)).add(z0);

        return result;
    }

    /**
     * Some BigNumber constants.
     */
    public static final BigNumber zero = new BigNumber(0);
    public static final BigNumber one = new BigNumber(1);
    public static final BigNumber ten = new BigNumber(10);
    // NOTE that the following is an exact number. It is defined as the closest
    // approximation to pi with 100 digits.
    // But, we know that it is not pi itself.
    public static final BigNumber pi = BigNumber.parse(
            "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067");

    /**
     * Factory method to throw an exception.
     *
     * @param ignoredX a double.
     * @throws BigNumberException because BigNumber is an EXACT representation
     *                            whereas double is not.
     */
    @SuppressWarnings("UnusedReturnValue")
    public static BigNumber value(double ignoredX) {
        throw new BigNumberException(
                "value(double): This is an inappropriate operation. Please use parse or another value call.");
    }

    /**
     * Factory method to convert a long into a BigNumber.
     *
     * @param x a long.
     * @return a new BigNumber.
     */
    public static BigNumber value(long x) {
        return value(BigInteger.valueOf(x));
    }

    /**
     * Factory method to create a BigNumber from an (exact) BigDecimal.
     *
     * @param x a BigDecimal number.
     * @return a new BigNumber.
     */
    public static BigNumber value(BigDecimal x) {
        BigNumber result = BigNumber.value(x.unscaledValue().longValue());
        return result.divide(BigInteger.TEN.pow(x.scale()));
    }

    /**
     * Factory method to create a BigNumber from a Rational (a Scala class).
     *
     * @param x a Rational number.
     * @return a new BigNumber which may or may not be exact.
     * 
     *         public static BigNumber value(Rational x) {
     *         BigNumber n = BigNumber.value(x.n().bigInteger());
     *         BigNumber d = BigNumber.value(x.d().bigInteger());
     *         return n.divide(d);
     *         }
     */

    /**
     * Factory method to create a BigNumber from a long whole number and a long
     * representing the decimals.
     *
     * @param whole    a non-negative long.
     * @param decimals a non-negative long, for example 14 for a 3.14 valued result.
     * @param sign     true if the result should be positive.
     * @return a new BigNumber.
     */
    public static BigNumber value(long whole, long decimals, boolean sign) {
        if (whole < 0)
            throw new RuntimeException("value: whole must be non-negative");
        if (decimals < 0)
            throw new RuntimeException("value: decimals must be non-negative");
        int[] dec = new int[MAXLONGDIGITS];
        int i = dec.length;
        long x = decimals;
        while (x > 0) {
            int q = (int) (x % 10);
            dec[--i] = q;
            x = x / 10;
        }
        return new BigNumber(BigInteger.valueOf(Math.abs(whole)), Arrays.copyOfRange(dec, i, MAXLONGDIGITS), sign);
    }

    /**
     * Factory method to create a BigNumber from a whole number and a decimal
     * number.
     *
     * @param whole    a non-negative long.
     * @param decimals a non-negative long, for example 14 for a 3.14 valued result.
     * @return a new BigNumber.
     */
    public static BigNumber value(long whole, long decimals) {
        return value(whole, decimals, true);
    }

    /**
     * Factory method to create a BigNumber from x.
     *
     * @param x a BigInteger.
     * @return a new BigNumber.
     */
    public static BigNumber value(BigInteger x) {
        return new BigNumber(x);
    }

    /**
     * Factory method to create a BigNumber from a whole number and a decimal
     * number.
     *
     * @param s a String representing a BigNumber. It is optionally preceded by a
     *          "-" and, otherwise, is of form "x.y"
     * @return a new BigNumber.
     */
    public static BigNumber parse(String s) {
        Pattern p = Pattern.compile("(-?)(\\d+)(\\.?(\\d*)?)");
        Matcher matcher = p.matcher(s);
        if (matcher.find()) {
            String group4 = matcher.group(4);
            int decimals = group4.length();
            int[] dec = new int[decimals];
            for (int i = 0; i < decimals; i++)
                dec[i] = group4.charAt(i) - '0';
            return new BigNumber(BigInteger.valueOf(Long.parseLong(matcher.group(2))), dec,
                    !matcher.group(1).equals("-"));
        } else
            throw new BigNumberException("cannot parse input string: " + s);
    }

    /**
     * Method to determine if this BigNumber is a whole number.
     *
     * @return true if this BigNumber is a whole number.
     */
    public boolean isWhole() {
        return decimals.length == 0;
    }

    /**
     * Method to determine if this BigNumber is, as expected, exact.
     * The reason it might not be exact is that we allow division to yield a
     * BigNumber.
     * For now at least, we simply look at the number of decimals.
     * CONSIDER in future we might have a field which explicitly determines
     * exactness.
     *
     * @return true if this BigNumber is exact.
     */
    public boolean isExact() {
        return decimals.length < MAXDECIMALDIGITS;
    }

    /**
     * Return a BigDecimal which has the exact value of this BigNumber.
     *
     * @return a BigDecimal.
     */
    public BigDecimal toBigDecimal() {
        int scale = decimals.length;
        BigInteger value = whole;
        for (int decimal : decimals) {
            value = value.multiply(BigInteger.TEN).add(BigInteger.valueOf(decimal));
        }
        BigDecimal result = new BigDecimal(value, scale);
        return sign ? result : result.negate();
    }

    /**
     * Returns the value of the specified number as an {@code int}.
     *
     * @return the numeric value represented by this object after conversion
     *         to type {@code int}.
     */
    @Override
    public int intValue() {
        if (isWhole()) {
            int value = whole.intValueExact(); // NOTE: can throw an ArithmeticException
            return sign ? value : -value;
        } else
            throw new BigNumberException("intValue: cannot represent this BigNumber as an int: " + this);
    }

    /**
     * Returns the value of the specified number as a {@code long}.
     *
     * @return the numeric value represented by this object after conversion
     *         to type {@code long}.
     */
    @Override
    public long longValue() {
        if (isWhole()) {
            long value = whole.longValueExact(); // NOTE: can throw an ArithmeticException
            return sign ? value : -value;
        } else
            throw new BigNumberException("longValue: cannot represent this BigNumber as a long: " + this);
    }

    /**
     * Returns the value of the specified number as a {@code float}.
     *
     * @return the numeric value represented by this object after conversion
     *         to type {@code float}.
     */
    @Override
    public float floatValue() {
        return (float) doubleValue();
    }

    /**
     * Method to yield a double representation of this BigNumber.
     * In general, the result will NOT be exact.
     * But you can check on that by using the isExact() method.
     * CONSIDER It is possible that isExact() will be false but the resulting double
     * will be exact.
     *
     * @return a double representation of this.
     */
    public double doubleValue() {
        double result = whole.doubleValue();
        double factor = 1.0 / 10;
        for (int decimal : decimals) {
            result += factor * decimal;
            factor /= 10;
        }
        return sign ? result : -result;
    }

    // public int compareTo(BigNumber that) {
    // if(this.whole.compareTo(that.whole)==0){
    // int thisLength = decimals.length;
    // int thatLength = that.decimals.length;
    // int minLength = Math.min(thisLength, thatLength);
    // for(int i=0;i<minLength;i++){
    // if
    // }
    // } else {
    // return this.whole.compareTo(that.whole);
    // }
    // }

    public int compareTo(BigNumber other) {
        if (this.equals(other)) {
            return 0;
        } else if (!this.sign && other.sign) {
            return -1;
        } else if (this.sign && !other.sign) {
            return 1;
        } else {
            // Compare the absolute values of the numbers
            int wholeComparison = this.whole.compareTo(other.whole);
            if (wholeComparison != 0) {
                return this.sign ? wholeComparison : -wholeComparison;
            } else {
                // Compare the decimal parts of the numbers
                int[] thisDecimals = this.decimals;
                int[] otherDecimals = other.decimals;
                int maxLength = Math.max(thisDecimals.length, otherDecimals.length);
                for (int i = 0; i < maxLength; i++) {
                    int thisDigit = (i < thisDecimals.length) ? thisDecimals[i] : 0;
                    int otherDigit = (i < otherDecimals.length) ? otherDecimals[i] : 0;
                    if (thisDigit != otherDigit) {
                        return this.sign ? Integer.compare(thisDigit, otherDigit)
                                : Integer.compare(otherDigit, thisDigit);
                    }
                }
                return 0; // The numbers are equal
            }
        }
    }

    public BigNumber add(BigNumber that) {
        if (!sign && !that.sign)
            return this.negate().add(that.negate()).negate();
        if (!sign)
            return that.add(this);
        boolean subtract = !that.sign;
        if(subtract && this.compareTo(that.negate())<0)
            return that.negate().add(this.negate()).negate();
        // NOTE at this point, sign is always true.
        int thisLength = decimals.length;
        int thatLength = that.decimals.length;
        int resultLength = Math.max(thisLength, thatLength);
        int[] dec = new int[resultLength];
        int carry = 0;
        
        for (int i = resultLength - 1; i >= 0; i--) {
            int sum = carry;
            if (i < thisLength)
                sum += decimals[i];
            if (i < thatLength)
                sum += subtract ? -that.decimals[i] : that.decimals[i];
            if (sum < 0) {
                sum += 10;
                if(i>0) 
                    dec[i - 1] -= 1;
                else
                    System.out.println("here");
            }
            carry = sum / 10;
            dec[i] += sum % 10;
        }
        BigInteger wholeSum = whole.add((subtract ? that.whole.negate() : that.whole).add(BigInteger.valueOf(carry)));
        if (wholeSum.signum() < 0) {
            for (int i = 0; i < resultLength; i++)
                dec[i] = -dec[i];
            return new BigNumber(wholeSum.negate(), dec, false);
        }
        return new BigNumber(wholeSum, dec, true);
    }

    public BigNumber negate() {
        return new BigNumber(whole, decimals, !sign);
    }

    public BigNumber multiply(BigNumber that) {
        BigInteger bigTen = BigInteger.valueOf(10);
        int thisLength = decimals.length + 1, thatLength = that.decimals.length + 1;
        long[] results = new long[thisLength + thatLength];
        int[] dec = new int[thisLength + thatLength - 1];
        for (int i = 0; i < thisLength; i++)
            for (int j = 0; j < thatLength; j++)
                results[i + j] += element(i) * that.element(j);
        BigInteger carry = BigInteger.ZERO;
        for (int k = results.length; k > 1; k--) {
            BigInteger value = carry.add(BigInteger.valueOf(results[k - 1]));
            BigInteger[] qr = value.divideAndRemainder(bigTen);
            carry = qr[0];
            dec[k - 2] = qr[1].intValue();
        }
        return new BigNumber(carry.add(BigInteger.valueOf(results[0])), dec, sign == that.sign);
    }

    public BigNumber divide(BigNumber x) {
        if (x.decimals.length > 0)
            // TODO implement long division.
            throw new BigNumberException("divide is not supported for division by non-whole numbers");
        else {
            BigNumber quotient = divide(x.whole);
            return x.sign ? quotient : quotient.negate();
        }
    }

    /**
     * Method to divide this BigNumber by a BigInteger.
     *
     * @param x a BigInteger value.
     * @return a BigNumber y such that x * y = this.
     */
    public BigNumber divide(BigInteger x) {
        if (x.signum() < 0)
            return divide(x.negate()).negate();
        BigInteger[] quotientRemainder = whole.divideAndRemainder(x);
        BigInteger remainder = quotientRemainder[1];
        List<BigInteger> dividends = new ArrayList<>();
        BigInteger ten = BigInteger.valueOf(10);
        for (int i = 0; i < MAXDECIMALDIGITS; i++) {
            BigInteger p = remainder.multiply(ten).add(BigInteger.valueOf(i < decimals.length ? decimals[i] : 0));
            BigInteger[] qr = p.divideAndRemainder(x);
            remainder = qr[1];
            dividends.add(qr[0]);
            if (remainder.signum() == 0 && i > decimals.length)
                break;
        }
        int[] dec = new int[dividends.size()];
        for (int i = 0; i < dec.length; i++)
            dec[i] = (int) dividends.get(i).longValue();
        return new BigNumber(quotientRemainder[0], dec, true);
    }

    /**
     * Method to divide this BigNumber by a long.
     * The implementation is based on division by BigInteger.
     *
     * @param x a long value.
     * @return a BigNumber y such that x * y = this.
     */
    public BigNumber divide(long x) {
        return divide(BigInteger.valueOf(x));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof BigNumber))
            return false;
        BigNumber bigNumber = (BigNumber) o;
        return whole.equals(bigNumber.whole) && sign == bigNumber.sign && Arrays.equals(decimals, bigNumber.decimals);
    }

    /**
     * TESTME
     *
     * @return the hashCode for this BigNumber.
     */
    @Override
    public int hashCode() {
        int result = Objects.hash(whole, sign);
        result = 31 * result + Arrays.hashCode(decimals);
        return result;
    }

    public String toString() {
        StringBuilder result = new StringBuilder(sign ? "" : "-");
        result.append(whole);
        String dec = decimalsToString();
        if (dec.length() > 0)
            result.append('.');
        result.append(dec);
        return result.toString();
    }

    /**
     * Primary constructor of BigNumber.
     *
     * @param whole    the whole number part (must be non-negative).
     * @param decimals the array of decimal digits.
     * @param sign     true if the result is to a positive number.
     */
    public BigNumber(BigInteger whole, int[] decimals, boolean sign) {
        if (whole.signum() < 0)
            throw new RuntimeException("BigNumber constructor: whole must be non-negative");
        this.whole = whole;
        this.decimals = trim(decimals);
        this.sign = sign;
    }

    /**
     * Secondary constructor to creat a BigNumber which has no decimal part.
     *
     * @param whole any BigInteger value (positive or negative).
     */
    public BigNumber(BigInteger whole) {
        this(whole.abs(), new int[] {}, whole.signum() >= 0);
    }

    /**
     * Secondary constructor to creat a BigNumber which has no decimal part.
     *
     * @param whole any BigInteger value (positive or negative).
     */
    public BigNumber(long whole) {
        this(BigInteger.valueOf(whole));
    }

    private String decimalsToString() {
        StringBuilder stringBuilder = new StringBuilder();
        for (int x : decimals)
            stringBuilder.append(x);
        return stringBuilder.toString();
    }

    private static int[] trim(int[] array) {
        int i = array.length;
        for (; i > 0; i--)
            if (array[i - 1] != 0)
                break;
        return Arrays.copyOf(array, i);
    }

    private long element(int i) {
        if (i == 0)
            return whole.longValueExact();
        else if (i > 0)
            return decimals[i - 1];
        else
            return 0; // TESTME CONSIDER throwing an exception.
    }

    /**
     * This number is the maximum number of decimal digits that will be generated by
     * division.
     * If the actual number of decimal digits is less than this number, we assume
     * that the
     * number is exact.
     * CONSIDER looking for repeated sequences to shorten this.
     */
    private static final int MAXDECIMALDIGITS = 1000;
    /**
     * This is the greatest number of digits that a long number can have.
     */
    public static final int MAXLONGDIGITS = 19;

    private final BigInteger whole;
    private final int[] decimals;
    private final boolean sign;

    static class BigNumberException extends RuntimeException {
        public BigNumberException(String s) {
            super(s);
        }
    }
}
