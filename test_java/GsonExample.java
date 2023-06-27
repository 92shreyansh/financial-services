import com.google.gson.*;

import java.util.ArrayList;

// class NestedObjectDeserializer implements JsonDeserializer<Context> {
//     @Override
//     public Context deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
//         JsonObject jsonObject = json.getAsJsonObject();
//         JsonElement nestedElement = jsonObject.get("nestedObject"); // Replace "nestedObject" with the actual key of your nested object

//         if (nestedElement != null && nestedElement.isJsonObject()) {
//             JsonObject nestedObject = nestedElement.getAsJsonObject();

//             // Extract the desired value from the nested object
//             JsonElement desiredValue = nestedObject.get("desiredValueKey"); // Replace "desiredValueKey" with the actual key of the desired value

//             if (desiredValue != null && desiredValue.isJsonPrimitive()) {
//                 String flattenedValue = desiredValue.getAsString(); // Convert the desired value to the appropriate type or flatten it as needed

//                 // Create a new instance of Context with the flattened value
//                 Context contextObj = new Context();
//                 contextObj.setFlattenedValue(flattenedValue); // Replace setFlattenedValue with the appropriate method to set the flattened value in the Context class

//                 return contextObj;
//             }
//         }

//         return null; // Return null or throw an exception if the desired value is not found
//     }
// }

public class GsonExample {

    public static void main(String[] args) {
        System.out.println("Context old :");
        System.out.println(new Gson().toJson(context_1));
        System.out.println("Context new :");
        System.out.println(new Gson().toJson(context_2));
        String context_1x = "{\"country\":\"IND\",\"bpp_uri\":\"https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f\",\"domain\":\"nic2004:60221\",\"timestamp\":\"anifhadhfias\",\"bap_id\":\"https://example-bap.com\",\"bpp_id\":\"https://example-bpp.com\",\"transaction_id\":\"b580c989-f84d-4abe-af28-2c818aafce3b\",\"message_id\":\"8926b747-0362-4fcc-b795-0994a6287700\",\"city\":\"std:080\",\"core_version\":\"1.0.0\",\"action\":\"on_confirm\",\"bap_uri\":\"https://api.example-bap.com/pilot/bap/cab/v1\"}";
        String context_2x = "{\"domain\":\"ONDC:RET10\",\"location\":{\"city\":{\"code\":\"std:080\"},\"country\":{\"code\":\"IND\"}},\"action\":\"search\",\"version\":\"2.0.1\",\"bap_id\":\"buyerapp.com\",\"bap_uri\":\"https://buyerapp.com/grocery\",\"transaction_id\":\"T1\",\"message_id\":\"M1\",\"timestamp\":\"hiuewhtihet\",\"ttl\":\"PT30S\"}";
    
        Context context_1 = new Gson().fromJson(context_1x, Context.class);
        Context context_2 = new Gson().fromJson(context_2x, Context.class);

        System.out.println("get context city from old");
        System.out.println(context_1.getCity());
        System.out.println("get context city from new");
        System.out.println(context_2.getCity());
        System.out.println("get context country from old");
        System.out.println(context_1.getCountry());
        System.out.println("get context country from new");
        System.out.println(context_2.getCountry());
        System.out.println("get context version from old");
        System.out.println(context_1.getCore_version());
        System.out.println("get context version from new");
        System.out.println(context_2.getCore_version());
    }
}


class AdditionalDesc{
    private String url;
    private String content_type;
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public String getContent_type() {
        return content_type;
    }
    public void setContent_type(String content_type) {
        this.content_type = content_type;
    }
}

class Circle{
    public String gps;
    public Radius radius;
    public String getGps() {
        return gps;
    }
    public void setGps(String gps) {
        this.gps = gps;
    }
    public Radius getRadius() {
        return radius;
    }
    public void setRadius(Radius radius) {
        this.radius = radius;
    }
}

class City{
    public String name;
    public String code;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
}

class Country{
    public String name;
    public String code;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
}

class Descriptor{
    public String name;
    public String code;
    public String short_desc;
    public String long_desc;
    public AdditionalDesc additional_desc;
    public ArrayList<Medium> media;
    public ArrayList<Image> images;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getShort_desc() {
        return short_desc;
    }
    public void setShort_desc(String short_desc) {
        this.short_desc = short_desc;
    }
    public String getLong_desc() {
        return long_desc;
    }
    public void setLong_desc(String long_desc) {
        this.long_desc = long_desc;
    }
    public AdditionalDesc getAdditional_desc() {
        return additional_desc;
    }
    public void setAdditional_desc(AdditionalDesc additional_desc) {
        this.additional_desc = additional_desc;
    }
    public ArrayList<Medium> getMedia() {
        return media;
    }
    public void setMedia(ArrayList<Medium> media) {
        this.media = media;
    }
    public ArrayList<Image> getImages() {
        return images;
    }
    public void setImages(ArrayList<Image> images) {
        this.images = images;
    }
}

class Image{
    public String url;
    public String size_type;
    public String width;
    public String height;
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public String getSize_type() {
        return size_type;
    }
    public void setSize_type(String size_type) {
        this.size_type = size_type;
    }
    public String getWidth() {
        return width;
    }
    public void setWidth(String width) {
        this.width = width;
    }
    public String getHeight() {
        return height;
    }
    public void setHeight(String height) {
        this.height = height;
    }
}

class Medium{
    public String mimetype;
    public String url;
    public String signature;
    public String dsa;
    public String getMimetype() {
        return mimetype;
    }
    public void setMimetype(String mimetype) {
        this.mimetype = mimetype;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public String getSignature() {
        return signature;
    }
    public void setSignature(String signature) {
        this.signature = signature;
    }
    public String getDsa() {
        return dsa;
    }
    public void setDsa(String dsa) {
        this.dsa = dsa;
    }
}

class Radius{
    public String type;
    public String value;
    public String estimated_value;
    public String computed_value;
    public Range range;
    public String unit;
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getValue() {
        return value;
    }
    public void setValue(String value) {
        this.value = value;
    }
    public String getEstimated_value() {
        return estimated_value;
    }
    public void setEstimated_value(String estimated_value) {
        this.estimated_value = estimated_value;
    }
    public String getComputed_value() {
        return computed_value;
    }
    public void setComputed_value(String computed_value) {
        this.computed_value = computed_value;
    }
    public Range getRange() {
        return range;
    }
    public void setRange(Range range) {
        this.range = range;
    }
    public String getUnit() {
        return unit;
    }
    public void setUnit(String unit) {
        this.unit = unit;
    }
}

class Range{
    public String min;
    public String max;
    public String getMin() {
        return min;
    }
    public void setMin(String min) {
        this.min = min;
    }
    public String getMax() {
        return max;
    }
    public void setMax(String max) {
        this.max = max;
    }
}

class Location{
    public String id;
    public Descriptor descriptor;
    public String map_url;
    public String gps;
    public String address;
    public City city;
    public String district;
    public State state;
    public Country country;
    public String area_code;
    public Circle circle;
    public String polygon;
    public String _3dspace;
    public String rating;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public Descriptor getDescriptor() {
        return descriptor;
    }
    public void setDescriptor(Descriptor descriptor) {
        this.descriptor = descriptor;
    }
    public String getMap_url() {
        return map_url;
    }
    public void setMap_url(String map_url) {
        this.map_url = map_url;
    }
    public String getGps() {
        return gps;
    }
    public void setGps(String gps) {
        this.gps = gps;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public City getCity() {
        return city;
    }
    public void setCity(City city) {
        this.city = city;
    }
    public String getDistrict() {
        return district;
    }
    public void setDistrict(String district) {
        this.district = district;
    }
    public State getState() {
        return state;
    }
    public void setState(State state) {
        this.state = state;
    }
    public Country getCountry() {
        return country;
    }
    public void setCountry(Country country) {
        this.country = country;
    }
    public String getArea_code() {
        return area_code;
    }
    public void setArea_code(String area_code) {
        this.area_code = area_code;
    }
    public Circle getCircle() {
        return circle;
    }
    public void setCircle(Circle circle) {
        this.circle = circle;
    }
    public String getPolygon() {
        return polygon;
    }
    public void setPolygon(String polygon) {
        this.polygon = polygon;
    }
    public String get_3dspace() {
        return _3dspace;
    }
    public void set_3dspace(String _3dspace) {
        this._3dspace = _3dspace;
    }
    public String getRating() {
        return rating;
    }
    public void setRating(String rating) {
        this.rating = rating;
    }
}

class State{
    public String name;
    public String code;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
}

class Context {
    private String country;
    private String bpp_uri;
    private String domain;
    private String timestamp;
    private String bap_id;
    private String bpp_id;
    private String transaction_id;
    private String message_id;
    private String city;
    private String core_version;
    private String action;
    private String bap_uri;
    //Added elements for new schema of 
    private String version;
    private Location location;

    @Override
    public String toString() {
        return "Context [country=" + getCountry() + ", bpp_uri=" + bpp_uri + ", domain=" + domain + ", timestamp="
                + timestamp + ", bap_id=" + bap_id + ", bpp_id=" + bpp_id + ", transaction_id=" + transaction_id
                + ", message_id=" + message_id + ", city=" + getCity() + ", core_version=" + getCore_version() + ", action="
                + action + ", bap_uri=" + bap_uri + "]";
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getCountry() {
        return country == null? location.getCountry().getCode(): this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getBpp_uri() {
        return bpp_uri;
    }

    public void setBpp_uri(String bpp_uri) {
        this.bpp_uri = bpp_uri;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getBap_id() {
        return bap_id;
    }

    public void setBap_id(String bap_id) {
        this.bap_id = bap_id;
    }

    public String getBpp_id() {
        return bpp_id;
    }

    public void setBpp_id(String bpp_id) {
        this.bpp_id = bpp_id;
    }

    public String getTransaction_id() {
        return transaction_id;
    }

    public void setTransaction_id(String transaction_id) {
        this.transaction_id = transaction_id;
    }

    public String getMessage_id() {
        return message_id;
    }

    public void setMessage_id(String message_id) {
        this.message_id = message_id;
    }

    public String getCity() {
        return city==null?this.location.getCity().getCode():this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCore_version() {
        return core_version == null? getVersion(): this.core_version;
    }

    public void setCore_version(String core_version) {
        this.core_version = core_version;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getBap_uri() {
        return bap_uri;
    }

    public void setBap_uri(String bap_uri) {
        this.bap_uri = bap_uri;
    }
}
