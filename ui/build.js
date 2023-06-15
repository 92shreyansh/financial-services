let build_spec = {
  "openapi": "3.0.0",
  "info": {
    "title": "ONDC Specification",
    "description": "ONDC Specification",
    "version": "1.0.0"
  },
  "security": [
    {
      "SubscriberAuth": []
    }
  ],
  "paths": {
    "/search": {
      "post": {
        "tags": [
          "Provider Platform",
          "Gateway"
        ],
        "description": "Consumer Platform declares the customer's intent to buy/avail products or services",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "intent": {
                        "$ref": "#/components/schemas/Intent"
                      }
                    }
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/select": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Consumer Platform declares the customer's cart (or equivalent) created by selecting objects from the catalog",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/init": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Initialize an order by providing billing and/or shipping details",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/confirm": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Initialize an order by providing billing and/or shipping details",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/status": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Fetch the latest order object",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order_id": {
                        "$ref": "#/components/schemas/Order/properties/id"
                      }
                    },
                    "required": [
                      "order_id"
                    ]
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/track": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Track an active order",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order_id": {
                        "$ref": "#/components/schemas/Order/properties/id"
                      },
                      "callback_url": {
                        "type": "string",
                        "format": "uri"
                      }
                    },
                    "required": [
                      "order_id"
                    ]
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/cancel": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Cancel an order",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order_id": {
                        "$ref": "#/components/schemas/Order/properties/id"
                      },
                      "cancellation_reason_id": {
                        "$ref": "#/components/schemas/Option/properties/id"
                      },
                      "descriptor": {
                        "$ref": "#/components/schemas/Descriptor"
                      }
                    },
                    "required": [
                      "order_id"
                    ]
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/update": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Remove object",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "update_target": {
                        "description": "Comma separated values of order objects being updated. For example: ```\"update_target\":\"item,billing,fulfillment\"```",
                        "type": "string"
                      },
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "update_target",
                      "order"
                    ]
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/rating": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Provide feedback on a service",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "$ref": "#/components/schemas/Rating"
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/support": {
      "post": {
        "tags": [
          "Provider Platform"
        ],
        "description": "Contact support",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "ref_id": {
                        "type": "string",
                        "description": "ID of the element for which support is needed"
                      }
                    }
                  }
                },
                "required": [
                  "context",
                  "message"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_search": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Provider Platform sends its catalog in response to a search request.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "catalog": {
                        "$ref": "#/components/schemas/Catalog"
                      }
                    },
                    "required": [
                      "catalog"
                    ]
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "context"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_select": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Send draft order object with quoted price for selected items",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_init": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Send order object with payment details updated",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_confirm": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Send active order object",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_track": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Send tracking details of an active order",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "tracking": {
                        "$ref": "#/components/schemas/Tracking"
                      }
                    },
                    "required": [
                      "tracking"
                    ]
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_cancel": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Send cancellation request_id with reasons list in case of cancellation request. Else send cancelled order object",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_update": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Returns updated service with updated runtime object",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_status": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Fetch the status of a Service",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "order": {
                        "$ref": "#/components/schemas/Order"
                      }
                    },
                    "required": [
                      "order"
                    ]
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_rating": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Provide feedback on a service",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "$ref": "#/components/schemas/RatingAck"
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/on_support": {
      "post": {
        "tags": [
          "Consumer Platform"
        ],
        "description": "Contact Support",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "context": {
                    "$ref": "#/components/schemas/Context"
                  },
                  "message": {
                    "type": "object",
                    "properties": {
                      "phone": {
                        "type": "string",
                        "format": "phone"
                      },
                      "email": {
                        "type": "string",
                        "format": "email"
                      },
                      "uri": {
                        "type": "string",
                        "format": "uri"
                      }
                    }
                  },
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                },
                "required": [
                  "context"
                ]
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "Acknowledgement of message received",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "object",
                      "properties": {
                        "ack": {
                          "$ref": "#/components/schemas/Ack"
                        }
                      },
                      "required": [
                        "ack"
                      ]
                    },
                    "error": {
                      "$ref": "#/components/schemas/Error"
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "SubscriberAuth": {
        "type": "apiKey",
        "in": "header",
        "name": "Authorization",
        "description": "Signature of message body using Consumer Platform or Provider Platform subscriber's signing public key. <br/><br/>Format:<br/><br/><code>Authorization : Signature keyId=\"{subscriber_id}|{unique_key_id}|{algorithm}\",algorithm=\"ed25519\",created=\"1606970629\",expires=\"1607030629\",headers=\"(created) (expires) digest\",signature=\"Base64(signing string)\"</code>"
      }
    },
    "schemas": {
      "Ack": {
        "description": "Describes the ACK response",
        "type": "object",
        "properties": {
          "status": {
            "type": "string",
            "description": "Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK",
            "enum": [
              "ACK",
              "NACK"
            ]
          }
        },
        "required": [
          "status"
        ]
      },
      "AddOn": {
        "description": "Describes an add-on",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR "
          },
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "price": {
            "$ref": "#/components/schemas/Price"
          }
        }
      },
      "Address": {
        "description": "Describes an address",
        "type": "object",
        "properties": {
          "door": {
            "type": "string",
            "description": "Door / Shop number of the address"
          },
          "name": {
            "type": "string",
            "description": "Name of address if applicable. Example, shop name"
          },
          "building": {
            "type": "string",
            "description": "Name of the building or block"
          },
          "street": {
            "type": "string",
            "description": "Street name or number"
          },
          "locality": {
            "type": "string",
            "description": "Name of the locality, apartments"
          },
          "ward": {
            "type": "string",
            "description": "Name or number of the ward if applicable"
          },
          "city": {
            "type": "string",
            "description": "City name"
          },
          "state": {
            "type": "string",
            "description": "State name"
          },
          "country": {
            "type": "string",
            "description": "Country name"
          },
          "area_code": {
            "type": "string",
            "description": "Area code. This can be Pincode, ZIP code or any equivalent"
          }
        }
      },
      "Agent": {
        "description": "Describes an order executor",
        "allOf": [
          {
            "$ref": "#/components/schemas/Person"
          },
          {
            "$ref": "#/components/schemas/Contact"
          },
          {
            "type": "object",
            "properties": {
              "rateable": {
                "$ref": "#/components/schemas/Rateable"
              }
            }
          }
        ]
      },
      "Authorization": {
        "description": "Describes an authorization mechanism",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of authorization mechanism used"
          },
          "token": {
            "type": "string",
            "description": "Token used for authorization"
          },
          "valid_from": {
            "type": "string",
            "format": "date-time",
            "description": "Timestamp in RFC3339 format from which token is valid"
          },
          "valid_to": {
            "type": "string",
            "format": "date-time",
            "description": "Timestamp in RFC3339 format until which token is valid"
          },
          "status": {
            "type": "string",
            "description": "Status of the token"
          }
        }
      },
      "Billing": {
        "description": "Describes a billing event",
        "type": "object",
        "properties": {
          "name": {
            "description": "Personal details of the customer needed for billing.",
            "type": "string"
          },
          "organization": {
            "$ref": "#/components/schemas/Organization"
          },
          "address": {
            "$ref": "#/components/schemas/Address"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "phone": {
            "type": "string"
          },
          "time": {
            "$ref": "#/components/schemas/Time"
          },
          "tax_number": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "name",
          "phone"
        ]
      },
      "Cancellation": {
        "description": "Describes the ACK response",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "full",
              "partial"
            ]
          },
          "ref_id": {
            "type": "string"
          },
          "policies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Policy"
            }
          },
          "time": {
            "type": "string",
            "format": "date-time"
          },
          "cancelled_by": {
            "type": "string"
          },
          "reasons": {
            "$ref": "#/components/schemas/Option"
          },
          "selected_reason": {
            "type": "object",
            "properties": {
              "id": {
                "$ref": "#/components/schemas/Option/properties/id"
              }
            }
          },
          "additional_description": {
            "$ref": "#/components/schemas/Descriptor"
          }
        }
      },
      "Catalog": {
        "description": "Describes a BPP catalog",
        "type": "object",
        "properties": {
          "bpp/descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "bpp/categories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Category"
            }
          },
          "bpp/fulfillments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Fulfillment"
            }
          },
          "bpp/payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Payment"
            }
          },
          "bpp/offers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Offer"
            }
          },
          "bpp/providers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Provider"
            }
          },
          "exp": {
            "type": "string",
            "description": "Time after which catalog has to be refreshed",
            "format": "date-time"
          }
        }
      },
      "Category": {
        "description": "Describes a category",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Unique id of the category"
          },
          "parent_category_id": {
            "$ref": "#/components/schemas/Category/properties/id"
          },
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "time": {
            "$ref": "#/components/schemas/Time"
          },
          "tags": {
            "$ref": "#/components/schemas/Tags"
          }
        }
      },
      "Circle": {
        "description": "Describes a circular area on the map",
        "type": "object",
        "properties": {
          "gps": {
            "$ref": "#/components/schemas/Gps"
          },
          "radius": {
            "$ref": "#/components/schemas/Scalar"
          }
        },
        "required": [
          "gps",
          "radius"
        ]
      },
      "City": {
        "description": "Describes a city",
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the city"
          },
          "code": {
            "type": "string",
            "description": "City code"
          }
        }
      },
      "Contact": {
        "type": "object",
        "properties": {
          "phone": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "tags": {
            "$ref": "#/components/schemas/Tags"
          }
        }
      },
      "Context": {
        "description": "Describes a beckn message context",
        "type": "object",
        "properties": {
          "domain": {
            "$ref": "#/components/schemas/Domain"
          },
          "country": {
            "$ref": "#/components/schemas/Country/properties/code"
          },
          "city": {
            "$ref": "#/components/schemas/City/properties/code"
          },
          "action": {
            "type": "string",
            "description": "Defines the Beckn API call. Any actions other than the enumerated actions are not supported by Beckn Protocol",
            "enum": [
              "search",
              "select",
              "init",
              "confirm",
              "update",
              "status",
              "track",
              "cancel",
              "rating",
              "support",
              "on_search",
              "on_select",
              "on_init",
              "on_confirm",
              "on_update",
              "on_status",
              "on_track",
              "on_cancel",
              "on_rating",
              "on_support"
            ]
          },
          "core_version": {
            "type": "string",
            "description": "Version of Beckn core API specification being used"
          },
          "bap_id": {
            "type": "string",
            "format": "uri",
            "description": "Unique id of the BAP. By default it is the fully qualified domain name of the BAP"
          },
          "bap_uri": {
            "type": "string",
            "format": "uri",
            "description": "URI of the BAP for accepting callbacks. Must have the same domain name as the bap_id"
          },
          "bpp_id": {
            "type": "string",
            "format": "uri",
            "description": "Unique id of the BPP. By default it is the fully qualified domain name of the BPP"
          },
          "bpp_uri": {
            "type": "string",
            "format": "uri",
            "description": "URI of the BPP. Must have the same domain name as the bap_id"
          },
          "transaction_id": {
            "type": "string",
            "description": "This is a unique value which persists across all API calls from search through confirm"
          },
          "message_id": {
            "type": "string",
            "description": "This is a unique value which persists during a request / callback cycle"
          },
          "timestamp": {
            "type": "string",
            "format": "date-time",
            "description": "Time of request generation in RFC3339 format"
          },
          "key": {
            "type": "string",
            "description": "The encryption public key of the sender"
          },
          "max_callbacks": {
            "description": "Number of callbacks expected. If this value is -1, then there is no limit. If it is 0, then no callbacks are expected.",
            "type": "integer",
            "minimum": -1
          },
          "ttl": {
            "type": "string",
            "description": "The duration in ISO8601 format after timestamp for which this message holds valid"
          }
        },
        "required": [
          "domain",
          "action",
          "country",
          "city",
          "core_version",
          "transaction_id",
          "message_id",
          "bap_id",
          "bap_uri",
          "timestamp"
        ]
      },
      "Country": {
        "description": "Describes a country.",
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the country"
          },
          "code": {
            "type": "string",
            "description": "Country code as per ISO 3166-1 and ISO 3166-2 format"
          }
        }
      },
      "DecimalValue": {
        "description": "Describes a decimal value",
        "type": "string",
        "pattern": "[+-]?([0-9]*[.])?[0-9]+"
      },
      "Descriptor": {
        "description": "Describes the description of a real-world object.",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "symbol": {
            "type": "string"
          },
          "short_desc": {
            "type": "string"
          },
          "long_desc": {
            "type": "string"
          },
          "images": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Image"
            }
          },
          "audio": {
            "type": "string",
            "format": "uri"
          },
          "3d_render": {
            "type": "string",
            "format": "uri"
          }
        }
      },
      "Dimensions": {
        "description": "Describes the dimensions of a real-world object",
        "type": "object",
        "properties": {
          "length": {
            "$ref": "#/components/schemas/Scalar"
          },
          "breadth": {
            "$ref": "#/components/schemas/Scalar"
          },
          "height": {
            "$ref": "#/components/schemas/Scalar"
          }
        }
      },
      "Document": {
        "description": "Describes a document which can be sent as a url",
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "format": "uri"
          },
          "label": {
            "type": "string"
          }
        }
      },
      "Domain": {
        "description": "Describes the domain of an object",
        "type": "string"
      },
      "Duration": {
        "description": "Describes duration as per ISO8601 format",
        "type": "string"
      },
      "Error": {
        "description": "Describes an error object",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "CONTEXT-ERROR",
              "CORE-ERROR",
              "DOMAIN-ERROR",
              "POLICY-ERROR",
              "JSON-SCHEMA-ERROR"
            ]
          },
          "code": {
            "type": "string",
            "description": "Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo"
          },
          "path": {
            "type": "string",
            "description": "Path to json schema generating the error. Used only during json schema validation errors"
          },
          "message": {
            "type": "string",
            "description": "Human readable message describing the error"
          }
        },
        "required": [
          "type",
          "code"
        ]
      },
      "Feedback": {
        "description": "Feedback for a service",
        "type": "object",
        "properties": {
          "feedback_form": {
            "$ref": "#/components/schemas/FeedbackForm"
          },
          "feedback_url": {
            "$ref": "#/components/schemas/FeedbackUrl"
          }
        }
      },
      "FeedbackForm": {
        "description": "Describes a feedback form that a BPP can send to get feedback from the BAP",
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/FeedbackFormElement"
        }
      },
      "FeedbackFormElement": {
        "description": "An element in the feedback form. It can be question or an answer to the question.",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "parent_id": {
            "$ref": "#/components/schemas/FeedbackFormElement/properties/id"
          },
          "question": {
            "description": "Specifies the question to which the answer options will be contained in the child FeedbackFormElements",
            "type": "string"
          },
          "answer": {
            "description": "Specifies an answer option to which the question will be in the FeedbackFormElement specified in parent_id",
            "type": "string"
          },
          "answer_type": {
            "description": "Specifies how the answer option should be rendered.",
            "type": "string",
            "enum": [
              "radio",
              "checkbox",
              "text"
            ]
          }
        }
      },
      "FeedbackUrl": {
        "description": "Describes how a feedback URL will be sent by the BPP",
        "type": "object",
        "properties": {
          "url": {
            "description": "feedback URL sent by the BPP",
            "type": "string",
            "format": "uri"
          },
          "tl_method": {
            "type": "string",
            "enum": [
              "http/get",
              "http/post"
            ]
          },
          "params": {
            "type": "object",
            "properties": {
              "feedback_id": {
                "type": "string",
                "description": "This value will be placed in the the $feedback_id url param in case of http/get and in the requestBody http/post requests"
              }
            },
            "additionalProperties": {
              "type": "string"
            },
            "required": [
              "feedback_id"
            ]
          }
        }
      },
      "Fulfillment": {
        "description": "Describes how a single product/service will be rendered/fulfilled to the end customer",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Unique reference ID to the fulfillment of an order"
          },
          "type": {
            "type": "string",
            "description": "This describes the type of fulfillment"
          },
          "provider_id": {
            "$ref": "#/components/schemas/Provider/properties/id"
          },
          "rating": {
            "$ref": "#/components/schemas/Rating/properties/value"
          },
          "state": {
            "$ref": "#/components/schemas/State"
          },
          "tracking": {
            "type": "boolean",
            "description": "Indicates whether the fulfillment allows tracking",
            "default": false
          },
          "customer": {
            "type": "object",
            "properties": {
              "person": {
                "$ref": "#/components/schemas/Person"
              },
              "contact": {
                "$ref": "#/components/schemas/Contact"
              }
            }
          },
          "agent": {
            "$ref": "#/components/schemas/Agent"
          },
          "person": {
            "$ref": "#/components/schemas/Person"
          },
          "contact": {
            "$ref": "#/components/schemas/Contact"
          },
          "vehicle": {
            "$ref": "#/components/schemas/Vehicle"
          },
          "start": {
            "description": "Details on the start of fulfillment",
            "type": "object",
            "properties": {
              "location": {
                "$ref": "#/components/schemas/Location"
              },
              "time": {
                "$ref": "#/components/schemas/Time"
              },
              "instructions": {
                "$ref": "#/components/schemas/Descriptor"
              },
              "contact": {
                "$ref": "#/components/schemas/Contact"
              },
              "person": {
                "$ref": "#/components/schemas/Person"
              },
              "authorization": {
                "$ref": "#/components/schemas/Authorization"
              }
            }
          },
          "end": {
            "description": "Details on the end of fulfillment",
            "type": "object",
            "properties": {
              "location": {
                "$ref": "#/components/schemas/Location"
              },
              "time": {
                "$ref": "#/components/schemas/Time"
              },
              "instructions": {
                "$ref": "#/components/schemas/Descriptor"
              },
              "contact": {
                "$ref": "#/components/schemas/Contact"
              },
              "person": {
                "$ref": "#/components/schemas/Person"
              },
              "authorization": {
                "$ref": "#/components/schemas/Authorization"
              }
            }
          },
          "rateable": {
            "$ref": "#/components/schemas/Rateable"
          },
          "tags": {
            "$ref": "#/components/schemas/Tags"
          }
        }
      },
      "Gps": {
        "description": "Describes a gps coordinate",
        "type": "string",
        "pattern": "^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$"
      },
      "Image": {
        "description": "Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```",
        "type": "string"
      },
      "Intent": {
        "description": "Intent of a user. Used for searching for services",
        "type": "object",
        "properties": {
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "provider": {
            "$ref": "#/components/schemas/Provider"
          },
          "fulfillment": {
            "$ref": "#/components/schemas/Fulfillment"
          },
          "payment": {
            "$ref": "#/components/schemas/Payment"
          },
          "category": {
            "$ref": "#/components/schemas/Category"
          },
          "offer": {
            "$ref": "#/components/schemas/Offer"
          },
          "item": {
            "$ref": "#/components/schemas/Item"
          },
          "tags": {
            "$ref": "#/components/schemas/Tags"
          }
        }
      },
      "ItemQuantity": {
        "description": "Describes count or amount of an item",
        "type": "object",
        "properties": {
          "allocated": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer",
                "minimum": 0
              },
              "measure": {
                "$ref": "#/components/schemas/Scalar"
              }
            }
          },
          "available": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer",
                "minimum": 0
              },
              "measure": {
                "$ref": "#/components/schemas/Scalar"
              }
            }
          },
          "maximum": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer",
                "minimum": 1
              },
              "measure": {
                "$ref": "#/components/schemas/Scalar"
              }
            }
          },
          "minimum": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer",
                "minimum": 0
              },
              "measure": {
                "$ref": "#/components/schemas/Scalar"
              }
            }
          },
          "selected": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer",
                "minimum": 0
              },
              "measure": {
                "$ref": "#/components/schemas/Scalar"
              }
            }
          }
        }
      },
      "Item": {
        "description": "Describes an item. Allows for domain extension.",
        "type": "object",
        "properties": {
          "id": {
            "description": "This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.",
            "type": "string",
            "format": "#/components/schemas/Item/properties/id"
          },
          "parent_item_id": {
            "$ref": "#/components/schemas/Item/properties/id"
          },
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "price": {
            "$ref": "#/components/schemas/Price"
          },
          "category_id": {
            "$ref": "#/components/schemas/Category/properties/id"
          },
          "fulfillment_id": {
            "$ref": "#/components/schemas/Fulfillment/properties/id"
          },
          "rating": {
            "$ref": "#/components/schemas/Rating/properties/value"
          },
          "location_id": {
            "$ref": "#/components/schemas/Location/properties/id"
          },
          "time": {
            "$ref": "#/components/schemas/Time"
          },
          "rateable": {
            "$ref": "#/components/schemas/Rateable"
          },
          "matched": {
            "type": "boolean"
          },
          "related": {
            "type": "boolean"
          },
          "recommended": {
            "type": "boolean"
          },
          "tags": {
            "$ref": "#/components/schemas/Tags"
          }
        }
      },
      "Language": {
        "description": "indicates language code. Beckn supports country codes as per ISO 639.2 standard",
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          }
        }
      },
      "Location": {
        "description": "Describes the location of a runtime object.",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "gps": {
            "$ref": "#/components/schemas/Gps"
          },
          "address": {
            "$ref": "#/components/schemas/Address"
          },
          "station_code": {
            "type": "string"
          },
          "city": {
            "$ref": "#/components/schemas/City"
          },
          "country": {
            "$ref": "#/components/schemas/Country"
          },
          "circle": {
            "$ref": "#/components/schemas/Circle"
          },
          "polygon": {
            "type": "string"
          },
          "3dspace": {
            "type": "string"
          },
          "time": {
            "$ref": "#/components/schemas/Time"
          }
        }
      },
      "Name": {
        "type": "string",
        "description": "Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}",
        "pattern": "^\\./[^/]+/[^/]*/[^/]*/[^/]*/[^/]*/[^/]*$"
      },
      "Offer": {
        "description": "Describes an offer",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "location_ids": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Location/properties/id"
            }
          },
          "category_ids": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Category/properties/id"
            }
          },
          "item_ids": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Item/properties/id"
            }
          },
          "time": {
            "$ref": "#/components/schemas/Time"
          }
        }
      },
      "Operator": {
        "description": "Describes the agent of a service",
        "allOf": [
          {
            "$ref": "#/components/schemas/Person"
          },
          {
            "properties": {
              "experience": {
                "type": "object",
                "properties": {
                  "label": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  },
                  "unit": {
                    "type": "string"
                  }
                }
              }
            }
          }
        ]
      },
      "Option": {
        "description": "Describes a selectable option",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          }
        }
      },
      "Order": {
        "description": "Describes the details of an order",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Hash of order object without id"
          },
          "state": {
            "type": "string"
          },
          "provider": {
            "type": "object",
            "properties": {
              "id": {
                "$ref": "#/components/schemas/Provider/properties/id"
              },
              "locations": {
                "type": "array",
                "maxItems": 1,
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/Location/properties/id"
                    }
                  },
                  "required": [
                    "id"
                  ]
                }
              }
            }
          },
          "items": {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/Item"
                },
                {
                  "properties": {
                    "quantity": {
                      "$ref": "#/components/schemas/ItemQuantity/properties/selected"
                    }
                  }
                }
              ],
              "type": "object",
              "required": [
                "id"
              ]
            }
          },
          "add_ons": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/AddOn/properties/id"
                }
              },
              "required": [
                "id"
              ]
            }
          },
          "offers": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/Offer/properties/id"
                }
              },
              "required": [
                "id"
              ]
            }
          },
          "documents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Document"
            }
          },
          "billing": {
            "$ref": "#/components/schemas/Billing"
          },
          "fulfillment": {
            "$ref": "#/components/schemas/Fulfillment"
          },
          "quote": {
            "$ref": "#/components/schemas/Quotation"
          },
          "payment": {
            "$ref": "#/components/schemas/Payment"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "Organization": {
        "description": "Describes an organization",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "cred": {
            "type": "string"
          }
        }
      },
      "Page": {
        "description": "Describes a page in a search result",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "next_id": {
            "type": "string"
          }
        }
      },
      "Payment": {
        "description": "Describes a payment",
        "type": "object",
        "properties": {
          "uri": {
            "type": "string",
            "description": "A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234",
            "format": "uri"
          },
          "tl_method": {
            "type": "string",
            "enum": [
              "http/get",
              "http/post"
            ]
          },
          "params": {
            "type": "object",
            "properties": {
              "transaction_id": {
                "type": "string",
                "description": "This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests"
              },
              "transaction_status": {
                "type": "string"
              },
              "amount": {
                "$ref": "#/components/schemas/DecimalValue"
              },
              "currency": {
                "$ref": "#/components/schemas/Price/properties/currency"
              }
            },
            "additionalProperties": {
              "type": "string"
            },
            "required": [
              "currency"
            ]
          },
          "type": {
            "type": "string",
            "enum": [
              "ON-ORDER",
              "PRE-FULFILLMENT",
              "ON-FULFILLMENT",
              "POST-FULFILLMENT"
            ]
          },
          "status": {
            "type": "string",
            "enum": [
              "PAID",
              "NOT-PAID"
            ]
          },
          "time": {
            "$ref": "#/components/schemas/Time"
          }
        }
      },
      "Person": {
        "description": "Describes a person.",
        "type": "object",
        "properties": {
          "name": {
            "$ref": "#/components/schemas/Name"
          },
          "image": {
            "$ref": "#/components/schemas/Image"
          },
          "dob": {
            "type": "string",
            "format": "date"
          },
          "gender": {
            "type": "string",
            "description": "Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender"
          },
          "cred": {
            "type": "string"
          },
          "tags": {
            "$ref": "#/components/schemas/Tags"
          }
        }
      },
      "Policy": {
        "description": "Describes a policy. Allows for domain extension.",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "parent_policy_id": {
            "$ref": "#/components/schemas/Policy/properties/id"
          },
          "time": {
            "$ref": "#/components/schemas/Time"
          }
        }
      },
      "Price": {
        "description": "Describes the price of an item. Allows for domain extension.",
        "type": "object",
        "properties": {
          "currency": {
            "type": "string"
          },
          "value": {
            "$ref": "#/components/schemas/DecimalValue"
          },
          "estimated_value": {
            "$ref": "#/components/schemas/DecimalValue"
          },
          "computed_value": {
            "$ref": "#/components/schemas/DecimalValue"
          },
          "listed_value": {
            "$ref": "#/components/schemas/DecimalValue"
          },
          "offered_value": {
            "$ref": "#/components/schemas/DecimalValue"
          },
          "minimum_value": {
            "$ref": "#/components/schemas/DecimalValue"
          },
          "maximum_value": {
            "$ref": "#/components/schemas/DecimalValue"
          }
        }
      },
      "Provider": {
        "description": "Describes a service provider. This can be a restaurant, a hospital, a Store etc",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Id of the provider"
          },
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "category_id": {
            "type": "string",
            "description": "Category Id of the provider"
          },
          "rating": {
            "$ref": "#/components/schemas/Rating/properties/value"
          },
          "time": {
            "$ref": "#/components/schemas/Time"
          },
          "categories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Category"
            }
          },
          "fulfillments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Fulfillment"
            }
          },
          "payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Payment"
            }
          },
          "locations": {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/Location"
                },
                {
                  "type": "object",
                  "properties": {
                    "rateable": {
                      "$ref": "#/components/schemas/Rateable"
                    }
                  }
                }
              ]
            }
          },
          "offers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Offer"
            }
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Item"
            }
          },
          "exp": {
            "type": "string",
            "description": "Time after which catalog has to be refreshed",
            "format": "date-time"
          },
          "rateable": {
            "$ref": "#/components/schemas/Rateable"
          },
          "tags": {
            "$ref": "#/components/schemas/Tags"
          }
        }
      },
      "Quotation": {
        "description": "Describes a quote",
        "type": "object",
        "properties": {
          "price": {
            "$ref": "#/components/schemas/Price"
          },
          "breakup": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "price": {
                  "$ref": "#/components/schemas/Price"
                }
              }
            }
          },
          "ttl": {
            "$ref": "#/components/schemas/Duration"
          }
        }
      },
      "Rateable": {
        "description": "If the entity can be rated or not",
        "type": "boolean"
      },
      "Rating": {
        "description": "Describes the rating of a person or an object.",
        "type": "object",
        "properties": {
          "rating_category": {
            "description": "Category of the object being rated",
            "type": "string"
          },
          "id": {
            "description": "Id of the object being rated",
            "type": "string"
          },
          "value": {
            "description": "Rating value given to the object",
            "type": "number",
            "minimum": 0
          },
          "feedback_form": {
            "$ref": "#/components/schemas/FeedbackForm"
          },
          "feedback_id": {
            "$ref": "#/components/schemas/FeedbackUrl/properties/params/properties/feedback_id"
          }
        }
      },
      "RatingAck": {
        "type": "object",
        "properties": {
          "feedback_ack": {
            "description": "If feedback has been recorded or not",
            "type": "boolean"
          },
          "rating_ack": {
            "description": "If rating has been recorded or not",
            "type": "boolean"
          }
        }
      },
      "Scalar": {
        "description": "An object representing a scalar quantity.",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "CONSTANT",
              "VARIABLE"
            ]
          },
          "value": {
            "type": "number"
          },
          "estimated_value": {
            "type": "number"
          },
          "computed_value": {
            "type": "number"
          },
          "range": {
            "type": "object",
            "properties": {
              "min": {
                "type": "number"
              },
              "max": {
                "type": "number"
              }
            }
          },
          "unit": {
            "type": "string"
          }
        },
        "required": [
          "value",
          "unit"
        ]
      },
      "Schedule": {
        "description": "Describes a schedule",
        "type": "object",
        "properties": {
          "frequency": {
            "$ref": "#/components/schemas/Duration"
          },
          "holidays": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "date-time"
            }
          },
          "times": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "date-time"
            }
          }
        }
      },
      "State": {
        "description": "Describes a state",
        "type": "object",
        "properties": {
          "descriptor": {
            "$ref": "#/components/schemas/Descriptor"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_by": {
            "type": "string",
            "description": "ID of entity which changed the state"
          }
        }
      },
      "Subscriber": {
        "type": "object",
        "description": "Any entity which wants to authenticate itself on a network. This can be a BAP, BPP, BG, BPPR or a BGR.",
        "properties": {
          "subscriber_id": {
            "type": "string",
            "description": "Registered domain name of the subscriber. Must have a valid SSL certificate issued by a Certificate Authority of the operating region"
          },
          "type": {
            "type": "string",
            "enum": [
              "bap",
              "bpp",
              "bg",
              "bppr",
              "bgr"
            ]
          },
          "cb_url": {
            "type": "string",
            "description": "Callback URL of the subscriber. The Registry will call this URL's on_subscribe API to validate the subscriber\\'s credentials"
          },
          "domain": {
            "$ref": "#/components/schemas/Domain"
          },
          "city": {
            "$ref": "#/components/schemas/City/properties/code"
          },
          "country": {
            "$ref": "#/components/schemas/Country/properties/code"
          },
          "signing_public_key": {
            "type": "string",
            "description": "Signing Public key of the subscriber. <br/><br/>Any subscriber platform (BAP, BPP, BG) who wants to transact on the network must digitally sign the ```requestBody``` using the corresponding private key of this public key and send it in the transport layer header. In case of ```HTTP``` it is the ```Authorization``` header. <br><br/>The ```Authorization``` will be used to validate the signature of a BAP or BPP.<br/><br/>Furthermore, if an API call is being proxied or multicast by a Beckn Gateway, the BG must use it\\'s signing key to digitally sign the ```requestBody``` using the corresponding private key of this public key and send it in the ```X-Gateway-Authorization``` header."
          },
          "encryption_public_key": {
            "type": "string",
            "description": "Encryption public key of the BAP subscriber. Any BPP must encrypt the ```requestBody.message``` value of the ```on_search``` API using this public key."
          },
          "status": {
            "type": "string",
            "enum": [
              "INITIATED",
              "UNDER_SUBSCRIPTION",
              "SUBSCRIBED",
              "INVALID_SSL",
              "UNSUBSCRIBED"
            ]
          },
          "created": {
            "type": "string",
            "description": "Timestamp when a subscriber was added to the registry with status = INITIATED",
            "format": "date-time"
          },
          "updated": {
            "type": "string",
            "format": "date-time"
          },
          "expires": {
            "type": "string",
            "description": "Expiry timestamp in UTC derived from the ```lease_time``` of the subscriber",
            "format": "date-time"
          }
        }
      },
      "Support": {
        "description": "Customer support",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "order",
              "billing",
              "fulfillment"
            ]
          },
          "ref_id": {
            "type": "string"
          },
          "channels": {
            "$ref": "#/components/schemas/Tags"
          }
        }
      },
      "Tags": {
        "description": "A simple key-value store which is used to contain extended metadata. However, grouped tags can be created using the recommendations provided in docs/protocol-drafts/BECKN-The-Tags-Schema-Draft-01.md",
        "additionalProperties": {
          "type": "string"
        }
      },
      "Time": {
        "description": "Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations",
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "timestamp": {
            "type": "string",
            "format": "date-time"
          },
          "duration": {
            "$ref": "#/components/schemas/Duration"
          },
          "range": {
            "type": "object",
            "properties": {
              "start": {
                "type": "string",
                "format": "date-time"
              },
              "end": {
                "type": "string",
                "format": "date-time"
              }
            }
          },
          "days": {
            "type": "string",
            "description": "comma separated values representing days of the week"
          },
          "schedule": {
            "$ref": "#/components/schemas/Schedule"
          }
        }
      },
      "TrackingData": {
        "description": "Describes tracking data object during live tracking of an order",
        "$ref": "#/components/schemas/Gps"
      },
      "Tracking": {
        "description": "Describes the tracking info of an object",
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "format": "uri"
          },
          "status": {
            "type": "string",
            "enum": [
              "active",
              "inactive"
            ]
          }
        }
      },
      "Vehicle": {
        "description": "Describes the properties of a vehicle used in a mobility service",
        "type": "object",
        "properties": {
          "category": {
            "type": "string"
          },
          "capacity": {
            "type": "integer"
          },
          "make": {
            "type": "string"
          },
          "model": {
            "type": "string"
          },
          "size": {
            "type": "string"
          },
          "variant": {
            "type": "string"
          },
          "color": {
            "type": "string"
          },
          "energy_type": {
            "type": "string"
          },
          "registration": {
            "type": "string"
          }
        }
      }
    }
  },
  "x-enum": {
    "search": {
      "context": {
        "country": [
          {
            "code": "IND M",
            "description": "Represents the country",
            "reference": "<PR/Issue/Discussion Links md format text>"
          }
        ],
        "domain": [
          {
            "code": "ONDC:TRV10",
            "description": "specifies the domain",
            "reference": "<PR/Issue/Discussion Links md format text>"
          }
        ],
        "city": [
          {
            "code": "std:080",
            "description": "Banglore",
            "reference": "<PR/Issue/Discussion Links md format text>"
          }
        ],
        "action": [
          {
            "code": "search",
            "description": "buyer app specifies the search intent",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_search",
            "description": "seller app responds with the catalog based on the search intent",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "select",
            "description": "buyer app specifies the items & quantity selected by a buye",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_select",
            "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "init",
            "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_init",
            "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "confirm",
            "description": "buyer app places the order on behalf of the buyer;",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_confirm",
            "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "update",
            "description": "updates in the servicable lic happens here",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_update",
            "description": "seller app  respiond with serviceable",
            "reference": "<PR/Issue/Discussion Links md format text"
          },
          {
            "code": "cancel",
            "description": "Cancelation of ride",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_cancel",
            "description": "Specifiy the cancelation of the state",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "track",
            "description": "Track the",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_track",
            "description": "Return tracking infomation of the order",
            "reference": "<PR/Issue/Discussion Links md format text"
          },
          {
            "code": "status",
            "description": "Request for status of the  vechicle",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_status",
            "description": "Return order with status , Deriver pickup - driver drop",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "support",
            "description": "Fetch support information related to a particular order",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_support",
            "description": "Return support information related to order",
            "reference": "<PR/Issue/Discussion Links md format text"
          }
        ]
      },
      "message": {
        "intent": {
          "fulfillment": {
            "vehicles": [
              {
                "code": "NOT decribed",
                "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                "reference": "<PR/Issue/Discussion Links md format text"
              }
            ],
            "descriptor": [
              {
                "code": "DRIVER_EN_ROUTE",
                "description": "Rider is on the way",
                "reference": "<PR/Issue/Discussion Links md format text"
              },
              {
                "code": "RIDE_CANCELLED",
                "description": "Rider cancel the ride",
                "reference": "<PR/Issue/Discussion Links md format text"
              },
              {
                "code": "PAYMENT_COLLECTED",
                "description": "payment is collected by rider",
                "reference": "<PR/Issue/Discussion Links md format text"
              },
              {
                "code": "RIDE_ENDED",
                "description": "When rider end the journey",
                "reference": "<PR/Issue/Discussion Links md format text"
              },
              {
                "code": "DRIVER_AT_PICKUP",
                "description": "when rider is at pickup location",
                "reference": "<PR/Issue/Discussion Links md format text"
              },
              {
                "code": "RIDE_STARTED",
                "description": "When rider started the journey",
                "reference": "<PR/Issue/Discussion Links md format text"
              }
            ]
          }
        }
      }
    },
    "on_search": {
      "context": {
        "country": [
          {
            "code": "IND M",
            "description": "Represents the country",
            "reference": "<PR/Issue/Discussion Links md format text>"
          }
        ],
        "domain": [
          {
            "code": "ONDC:TRV10",
            "description": "specifies the domain",
            "reference": "<PR/Issue/Discussion Links md format text>"
          }
        ],
        "city": [
          {
            "code": "std:080",
            "description": "Banglore",
            "reference": "<PR/Issue/Discussion Links md format text>"
          }
        ],
        "action": [
          {
            "code": "search",
            "description": "buyer app specifies the search intent",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_search",
            "description": "seller app responds with the catalog based on the search intent",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "select",
            "description": "buyer app specifies the items & quantity selected by a buye",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_select",
            "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "init",
            "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_init",
            "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "confirm",
            "description": "buyer app places the order on behalf of the buyer;",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_confirm",
            "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "update",
            "description": "updates in the servicable lic happens here",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_update",
            "description": "seller app  respiond with serviceable",
            "reference": "<PR/Issue/Discussion Links md format text"
          },
          {
            "code": "cancel",
            "description": "Cancelation of ride",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_cancel",
            "description": "Specifiy the cancelation of the state",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "track",
            "description": "Track the",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_track",
            "description": "Return tracking infomation of the order",
            "reference": "<PR/Issue/Discussion Links md format text"
          },
          {
            "code": "status",
            "description": "Request for status of the  vechicle",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_status",
            "description": "Return order with status , Deriver pickup - driver drop",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "support",
            "description": "Fetch support information related to a particular order",
            "reference": "<PR/Issue/Discussion Links md format text>"
          },
          {
            "code": "on_support",
            "description": "Return support information related to order",
            "reference": "<PR/Issue/Discussion Links md format text"
          }
        ]
      },
      "message": {
        "catalog": {
          "bpp/provider": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillments": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payments": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "select": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        },
        "message": {
          "order": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillment": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payment": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "on_select": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        },
        "message": {
          "order": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillment": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payment": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "init": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        },
        "message": {
          "order": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillment": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payment": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "on_init": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        },
        "message": {
          "order": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillment": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payment": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "confirm": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        },
        "message": {
          "order": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillment": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payment": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "on_confirm": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        },
        "message": {
          "order": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillment": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payment": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "status": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        }
      },
      "on_status": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        },
        "message": {
          "order": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillment": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payment": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "cancel": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        }
      },
      "on_cancel": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        },
        "message": {
          "order": {
            "items": {
              "descriptor": [
                {
                  "code": "RIDE",
                  "description": "Describes the kind of rides involve",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "fulfillment": {
              "vehicles": [
                {
                  "code": "NOT decribed",
                  "description": "This enum specifies kind of vechicale that is used (AUTO_RICKSHAW)",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "descriptor": [
                {
                  "code": "DRIVER_EN_ROUTE",
                  "description": "Rider is on the way",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_CANCELLED",
                  "description": "Rider cancel the ride",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAYMENT_COLLECTED",
                  "description": "payment is collected by rider",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_ENDED",
                  "description": "When rider end the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "DRIVER_AT_PICKUP",
                  "description": "when rider is at pickup location",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "RIDE_STARTED",
                  "description": "When rider started the journey",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            },
            "payment": {
              "transaction_status": [
                {
                  "code": "NOT-PAID",
                  "description": "NOT-PAID is kind of payment, when the payment is not completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "PAID",
                  "description": "PAID is kind of payment, when the payment is completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ],
              "collected_by": [
                {
                  "code": "BPP",
                  "description": "when seller app is collecting the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "BAP",
                  "description": "when buyer app is collecting /the payments",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "ON-FULFILLMENT",
                  "description": "Payment happens before the journey completed",
                  "reference": "<PR/Issue/Discussion Links md format text"
                },
                {
                  "code": "POST-FULFILLMENT",
                  "description": "After reaching or completiion of journey payment happens",
                  "reference": "<PR/Issue/Discussion Links md format text"
                }
              ]
            }
          }
        }
      },
      "track": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        }
      },
      "on_track": {
        "context": {
          "country": [
            {
              "code": "IND M",
              "description": "Represents the country",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "domain": [
            {
              "code": "ONDC:TRV10",
              "description": "specifies the domain",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "city": [
            {
              "code": "std:080",
              "description": "Banglore",
              "reference": "<PR/Issue/Discussion Links md format text>"
            }
          ],
          "action": [
            {
              "code": "search",
              "description": "buyer app specifies the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_search",
              "description": "seller app responds with the catalog based on the search intent",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "select",
              "description": "buyer app specifies the items & quantity selected by a buye",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_select",
              "description": "seller app responds with the serviceability info, quote & O2D TAT for selected items;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_init",
              "description": "buyer & seller app specify & agree to the terms & conditions prior to placing the order;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "confirm",
              "description": "buyer app places the order on behalf of the buyer;",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_confirm",
              "description": "seller app responds to the order placed either through auto-acceptance or deferred acceptance or rejection of the order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "update",
              "description": "updates in the servicable lic happens here",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_update",
              "description": "seller app  respiond with serviceable",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "cancel",
              "description": "Cancelation of ride",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_cancel",
              "description": "Specifiy the cancelation of the state",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "track",
              "description": "Track the",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_track",
              "description": "Return tracking infomation of the order",
              "reference": "<PR/Issue/Discussion Links md format text"
            },
            {
              "code": "status",
              "description": "Request for status of the  vechicle",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_status",
              "description": "Return order with status , Deriver pickup - driver drop",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "support",
              "description": "Fetch support information related to a particular order",
              "reference": "<PR/Issue/Discussion Links md format text>"
            },
            {
              "code": "on_support",
              "description": "Return support information related to order",
              "reference": "<PR/Issue/Discussion Links md format text"
            }
          ]
        }
      }
    }
  },
  "x-tags": {
    "search": {
      "message": {
        "intent": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    },
    "on_search": {
      "message": {
        "catalog": {
          "bpp/providers": {
            "fulfillments": {
              "customer": {
                "person": {
                  "tags": [
                    {
                      "code": "localization",
                      "description": "follow ISO 639-1 codes",
                      "reference": "<PR/Issue/Discussion Links md format text>",
                      "list": [
                        {
                          "code": "lang",
                          "description": "follow ISO 639-1 codes",
                          "reference": "<PR/Issue/Discussion Links md format text>"
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "items": {
              "tags": [
                {
                  "code": "fare_policy",
                  "description": "describes the chareges along with the currency value",
                  "reference": "<PR/Issue/Discussion Links md format text>",
                  "list": [
                    {
                      "code": "extra_fare",
                      "description": "describes the chareges along with the currency value",
                      "reference": "<PR/Issue/Discussion Links md format text>"
                    },
                    {
                      "code": "pickup_charges",
                      "description": "describes the chareges along with the currency value"
                    },
                    {
                      "code": "nominal_fare",
                      "description": "describes the chareges along with the currency value",
                      "reference": "<PR/Issue/Discussion Links md format text>"
                    },
                    {
                      "code": "waiting_charges",
                      "description": "describes the chareges along with the currency value",
                      "reference": "<PR/Issue/Discussion Links md format text>"
                    },
                    {
                      "code": "night_charges",
                      "description": "describes the chareges along with the currency value",
                      "reference": "<PR/Issue/Discussion Links md format text>"
                    },
                    {
                      "code": "night_shift_start_time",
                      "description": "describes the chareges along with the currency value",
                      "reference": "<PR/Issue/Discussion Links md format text>"
                    },
                    {
                      "code": "night_shift_end_time",
                      "description": "describes the chareges along with the currency value",
                      "reference": "<PR/Issue/Discussion Links md format text>"
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    "select": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "on_select": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "init": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "on_init": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "confirm": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "on_confirm": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "on_status": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "on_cancel": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "on_update": {
      "message": {
        "order": {
          "fulfillment": {
            "customer": {
              "person": {
                "tags": [
                  {
                    "code": "localization",
                    "description": "follow ISO 639-1 codes",
                    "reference": "<PR/Issue/Discussion Links md format text>",
                    "list": [
                      {
                        "code": "lang",
                        "description": "follow ISO 639-1 codes",
                        "reference": "<PR/Issue/Discussion Links md format text>"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "items": {
            "tags": [
              {
                "code": "fare_policy",
                "description": "describes the chareges along with the currency value",
                "reference": "<PR/Issue/Discussion Links md format text>",
                "list": [
                  {
                    "code": "extra_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "pickup_charges",
                    "description": "describes the chareges along with the currency value"
                  },
                  {
                    "code": "nominal_fare",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "waiting_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_charges",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_start_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  },
                  {
                    "code": "night_shift_end_time",
                    "description": "describes the chareges along with the currency value",
                    "reference": "<PR/Issue/Discussion Links md format text>"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "x-examples": {
    "on-demand": {
      "search": {
        "examples": [
          {
            "summary": "Search for services in the city of Bengaluru by pickup and drop location",
            "value": {
              "context": {
                "country": "IND",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:41:16.000Z",
                "bap_id": "example-test-bap.com",
                "transaction_id": "6743e9e2-4fb5-487c-92b7-13ba8018f176",
                "message_id": "6743e9e2-4fb5-487c-92b7-13ba8018f176",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "search",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "intent": {
                  "fulfillment": {
                    "start": {
                      "location": {
                        "gps": "12.923608703179461, 77.61462964117527"
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9346302, 77.61533969999999"
                      }
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Search by pickup and drop location with localization info",
            "value": {
              "context": {
                "country": "IND",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:41:16Z",
                "bap_id": "example-bap.com",
                "transaction_id": "6743e9e2-4fb5-487c-92b7-13ba8018f176",
                "message_id": "6743e9e2-4fb5-487c-92b7-13ba8018f176",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "search",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "intent": {
                  "fulfillment": {
                    "start": {
                      "location": {
                        "gps": "12.923608703179461, 77.61462964117527"
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9346302, 77.61533969999999"
                      }
                    },
                    "customer": {
                      "person": {
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "select": {
        "examples": [
          {
            "summary": "Get quote for a specific product from a mobility catalog",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "ONDCTRV10",
                "timestamp": "2023-03-23T04:46:45Z",
                "bap_id": "example-bap.com",
                "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
                "bpp_id": "example-bpp.com",
                "message_id": "432fdfd6-0457-47b6-9fac-80cbe5c0a75b",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "select",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "max_callbacks": 3,
                "ttl": "P120S"
              },
              "message": {
                "order": {
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e"
                    }
                  ],
                  "fulfillment": {
                    "start": {
                      "location": {
                        "gps": "12.910458, 77.543089"
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9535139, 77.5710434"
                      }
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Get quote for a specific product from a mobility catalog with gps and address details",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:46:45Z",
                "bap_id": "example-bap.com",
                "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
                "bpp_id": "example-bpp.com",
                "message_id": "432fdfd6-0457-47b6-9fac-80cbe5c0a75b",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "select",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "max_callbacks": 3,
                "ttl": "P120S"
              },
              "message": {
                "order": {
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e"
                    }
                  ],
                  "fulfillment": {
                    "start": {
                      "location": {
                        "gps": "12.910458, 77.543089",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9535139, 77.5710434",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Get quote for a specific product from a mobility catalog with localization",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:46:45Z",
                "bap_id": "example-bap.com",
                "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
                "bpp_id": "example-bpp.com",
                "message_id": "432fdfd6-0457-47b6-9fac-80cbe5c0a75b",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "select",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "max_callbacks": 3,
                "ttl": "P120S"
              },
              "message": {
                "order": {
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e"
                    }
                  ],
                  "fulfillment": {
                    "start": {
                      "location": {
                        "gps": "12.910458, 77.543089",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9535139, 77.5710434",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "customer": {
                      "person": {
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Get quote for a specific product from a mobility catalog and receive only one qutote",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:46:45Z",
                "bap_id": "example-bap.com",
                "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
                "bpp_id": "example-bpp.com",
                "message_id": "432fdfd6-0457-47b6-9fac-80cbe5c0a75b",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "select",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "max_callbacks": 1,
                "ttl": "P120S"
              },
              "message": {
                "order": {
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e"
                    }
                  ],
                  "fulfillment": {
                    "start": {
                      "location": {
                        "gps": "12.910458, 77.543089"
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9535139, 77.5710434"
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "init": {
        "examples": [
          {
            "summary": "Initialize draft order and request for terms of service",
            "value": {
              "context": {
                "action": "init",
                "bap_id": "example-bap.com",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "bpp_id": "example-bpp.com",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "city": "std:080",
                "core_version": "0.9.4",
                "country": "IND",
                "domain": "nic2004:60221",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "timestamp": "2023-03-23T04:48:53Z",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b"
              },
              "message": {
                "order": {
                  "fulfillment": {
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/code": "localization",
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "rateable": true,
                      "rating": "5"
                    },
                    "end": {
                      "location": {
                        "address": {
                          "area_code": "",
                          "building": "Rangadore Memorial Hospital",
                          "city": "Bengaluru",
                          "country": "India",
                          "door": null,
                          "locality": "Basavanagudi",
                          "state": "Karnataka",
                          "street": "Chikkanna Garden",
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital"
                        },
                        "gps": "12.9711869, 77.5868122"
                      }
                    },
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "start": {
                      "location": {
                        "address": {
                          "area_code": "560061",
                          "building": "6th Main Rd",
                          "city": "Bengaluru",
                          "country": "India",
                          "door": "98A, Sarovarm 2nd cross",
                          "locality": "Uttarahalli Hobli",
                          "state": "Karnataka 560061",
                          "street": "Ramanjaneyanagar",
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar"
                        },
                        "gps": "13.008935, 77.6444085"
                      }
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW"
                    }
                  },
                  "items": [
                    {
                      "fulfillment_id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "payment_id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f"
                    }
                  ],
                  "payment": {
                    "collected_by": "BPP",
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT"
                  },
                  "provider": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f"
                  },
                  "quote": {
                    "breakup": [
                      {
                        "price": {
                          "currency": "INR",
                          "value": "30"
                        },
                        "title": "Base Fare"
                      },
                      {
                        "price": {
                          "currency": "INR",
                          "value": "56"
                        },
                        "title": "Per km fare"
                      }
                    ],
                    "currency": "INR",
                    "value": "76"
                  }
                }
              }
            }
          }
        ]
      },
      "confirm": {
        "examples": [
          {
            "summary": "Confirm ride booking",
            "value": {
              "context": {
                "action": "confirm",
                "bap_id": "example-bap.com",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "bpp_id": "example-bpp.com",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "city": "std:080",
                "core_version": "0.9.4",
                "country": "IND",
                "domain": "nic2004:60221",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "timestamp": "2023-03-23T04:48:53Z",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b"
              },
              "message": {
                "order": {
                  "fulfillment": {
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "rateable": true,
                      "rating": "5"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/code": "localization",
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "address": {
                          "area_code": "",
                          "building": "Rangadore Memorial Hospital",
                          "city": "Bengaluru",
                          "country": "India",
                          "door": null,
                          "locality": "Basavanagudi",
                          "state": "Karnataka",
                          "street": "Chikkanna Garden",
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital"
                        },
                        "gps": "12.9711869, 77.5868122"
                      }
                    },
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "start": {
                      "location": {
                        "address": {
                          "area_code": "560061",
                          "building": "6th Main Rd",
                          "city": "Bengaluru",
                          "country": "India",
                          "door": "98A, Sarovarm 2nd cross",
                          "locality": "Uttarahalli Hobli",
                          "state": "Karnataka 560061",
                          "street": "Ramanjaneyanagar",
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar"
                        },
                        "gps": "13.008935, 77.6444085"
                      }
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW"
                    }
                  },
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "items": [
                    {
                      "descriptor": {
                        "code": "RIDE",
                        "name": "Auto Ride"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "payment_id": "1",
                      "tags": {
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/code": "info",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/value": "3 min"
                      }
                    }
                  ],
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "params": {
                      "amount": "81",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    },
                    "type": "ON-FULFILLMENT"
                  },
                  "provider": {
                    "descriptor": {
                      "name": "Raghavendra J"
                    },
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3"
                  },
                  "quote": {
                    "breakup": [
                      {
                        "price": {
                          "currency": "INR",
                          "value": "30"
                        },
                        "title": "Base Fare"
                      },
                      {
                        "price": {
                          "currency": "INR",
                          "value": "56"
                        },
                        "title": "Per km fare"
                      },
                      {
                        "price": {
                          "currency": "INR",
                          "value": "2.5"
                        },
                        "title": "CGST @ 5%"
                      },
                      {
                        "price": {
                          "currency": "INR",
                          "value": "2.5"
                        },
                        "title": "SGST @ 5%"
                      }
                    ],
                    "currency": "INR",
                    "value": "81"
                  }
                }
              }
            }
          }
        ]
      },
      "status": {
        "examples": [
          {
            "summary": "Get latest fulfillment status of a booking",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "status",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order_id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68"
              }
            }
          }
        ]
      },
      "track": {
        "examples": [
          {
            "summary": "Track an active ride",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "track",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order_id": "22e090fc-b8b1-4437-9126-ff7a71c7845c"
              }
            }
          }
        ]
      },
      "cancel": {
        "examples": [
          {
            "summary": "Cancel a ride with selected reason",
            "value": {
              "context": {
                "action": "cancel",
                "bap_id": "api.beckn.juspay.in/pilot/bap/cab/v1",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "bpp_id": "api.beckn.juspay.in/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "city": "Bangalore",
                "core_version": "0.9.4",
                "country": "IND",
                "domain": "nic2004:60221",
                "message_id": "be6a495a-e941-4fbf-9d59-f1e6166cccc8",
                "timestamp": "2023-03-23T05:15:08Z"
              },
              "message": {
                "cancellation_reason_id": "5",
                "order_id": "b4232ad4-19ee-4c67-9223-a5189b13a741"
              }
            }
          },
          {
            "summary": "Cancel a ride with user provided information",
            "value": {
              "context": {
                "action": "cancel",
                "bap_id": "api.beckn.juspay.in/pilot/bap/cab/v1",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "bpp_id": "api.beckn.juspay.in/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "city": "Bangalore",
                "core_version": "0.9.4",
                "country": "IND",
                "domain": "nic2004:60221",
                "message_id": "be6a495a-e941-4fbf-9d59-f1e6166cccc8",
                "timestamp": "2023-03-23T05:15:08Z"
              },
              "message": {
                "cancellation_reason_id": "7",
                "descriptor": {
                  "short_desc": "Accidenally booked the ride"
                },
                "order_id": "b4232ad4-19ee-4c67-9223-a5189b13a741"
              }
            }
          }
        ]
      },
      "support": {
        "examples": [
          {
            "summary": "Fetch support information related to a particular order",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "support",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "ref_id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68"
              }
            }
          }
        ]
      },
      "on_search": {
        "examples": [
          {
            "summary": "Return a mobility catalog",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:43:02Z",
                "bap_id": "example-bap.com",
                "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
                "bpp_id": "example-bpp.com",
                "message_id": "21e54d3c-9c3b-47c1-aa3b-b0e7b20818ee",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_search",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "catalog": {
                  "bpp/descriptor": {
                    "name": "Namma Yatri Partner"
                  },
                  "bpp/providers": [
                    {
                      "locations": [
                        {
                          "id": "1",
                          "gps": "12.9164682,77.6089985"
                        },
                        {
                          "id": "2",
                          "gps": "12.91671,77.6092983"
                        },
                        {
                          "id": "3",
                          "gps": "12.9165733,77.6152167"
                        },
                        {
                          "id": "4",
                          "gps": "12.9068578,77.6044567"
                        }
                      ],
                      "items": [
                        {
                          "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                          "descriptor": {
                            "name": "Auto Ride",
                            "code": "RIDE"
                          },
                          "price": {
                            "maximum_value": "156",
                            "currency": "INR",
                            "minimum_value": "176",
                            "value": "156 - 176 INR"
                          },
                          "tags": {
                            "groups/1/descriptor/name": "Daytime Charges",
                            "groups/1/descriptor/code": "fare_policy",
                            "groups/1/display": true,
                            "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                            "groups/1/list/1/value": "₹ 30 upto 2 km",
                            "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                            "groups/1/list/2/descriptor/code": "extra_fare",
                            "groups/1/list/2/value": "₹15 / km",
                            "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                            "groups/1/list/3/descriptor/code": "pickup_charges",
                            "groups/1/list/3/value": "₹ 10",
                            "groups/1/list/4/descriptor/name": "Nominal Fare",
                            "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                            "groups/1/list/4/descriptor/code": "nominal_fare",
                            "groups/1/list/4/value": "₹ 10",
                            "groups/1/list/5/descriptor/name": "Waiting Charges",
                            "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                            "groups/1/list/5/descriptor/code": "waiting_charges",
                            "groups/1/list/5/value": "₹ 0 / min",
                            "groups/2/descriptor/name": "Night Charges",
                            "groups/2/descriptor/code": "fare_policy",
                            "groups/2/display": true,
                            "groups/2/list/1/descriptor/name": "Night Charges",
                            "groups/2/list/1/descriptor/code": "night_charges",
                            "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                            "groups/2/list/2/descriptor/name": "Night Shift Start",
                            "groups/2/list/2/descriptor/code": "night_shift_start_time",
                            "groups/2/list/2/value": "22:00:00",
                            "groups/2/list/3/descriptor/name": "Night Shift End",
                            "groups/2/list/3/descriptor/code": "night_shift_end_time",
                            "groups/2/list/3/value": "05:00:00",
                            "groups/3/descriptor/name": "General Information",
                            "groups/3/descriptor/code": "info",
                            "groups/3/display": true,
                            "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                            "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                            "groups/3/list/1/value": "661 m",
                            "groups/3/list/2/descriptor/name": "Wait time upto",
                            "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                            "groups/3/list/2/value": "3 min"
                          },
                          "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                          "payment_id": "1"
                        }
                      ],
                      "fulfillments": [
                        {
                          "id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                          "start": {
                            "location": {
                              "gps": "12.9099828, 77.6118226",
                              "address": {
                                "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                                "country": "India",
                                "building": "6th Main Rd",
                                "state": "Karnataka 560061",
                                "city": "Bengaluru",
                                "locality": "Uttarahalli Hobli",
                                "door": "98A, Sarovarm 2nd cross",
                                "area_code": "560061",
                                "street": "Ramanjaneyanagar"
                              }
                            }
                          },
                          "end": {
                            "location": {
                              "gps": "12.9351856, 77.62459969999999",
                              "address": {
                                "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                                "country": "India",
                                "building": "Rangadore Memorial Hospital",
                                "state": "Karnataka",
                                "city": "Bengaluru",
                                "locality": "Basavanagudi",
                                "door": null,
                                "area_code": "",
                                "street": "Chikkanna Garden"
                              }
                            }
                          },
                          "vehicle": {
                            "category": "AUTO_RICKSHAW"
                          },
                          "tags": {
                            "groups/1/descriptor/code": "route_info",
                            "groups/1/descriptor/name": "Route Information",
                            "groups/1/display": true,
                            "groups/1/list/1/descriptor/code": "encoded_polyline",
                            "groups/1/list/1/descriptor/name": "Path",
                            "groups/1/list/1/value": "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
                            "groups/1/list/2/descriptor/code": "waypoints",
                            "groups/1/list/2/descriptor/name": "Waypoints",
                            "groups/1/list/2/value": "[{\"gps\":\"12.9099828, 77.6118226\"},{\"gps\":\"12.9099828, 77.6118226\"},{\"gps\":\"12.9099828, 77.6118226\"},{\"gps\":\"12.9099828, 77.6118226\"}]"
                          }
                        }
                      ],
                      "payments": [
                        {
                          "id": "1",
                          "type": "ON-FULFILLMENT",
                          "collected_by": "BPP"
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "on_select": {
        "examples": [
          {
            "summary": "Return a quote offered by a provider",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_select",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order": {
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "76",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "56",
                          "currency": "INR"
                        }
                      }
                    ],
                    "ttl": "P200S"
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "state": {
                      "descriptor": {
                        "name": "Found drivers",
                        "code": "AGENTS_FOUND"
                      }
                    },
                    "start": {
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW"
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "on_init": {
        "examples": [
          {
            "summary": "Return draft order with payment terms",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_init",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order": {
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "81",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "56",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      }
                    ]
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "start": {
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  },
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT",
                    "params": {
                      "amount": "81",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "on_confirm": {
        "examples": [
          {
            "summary": "Return confirmed order with latest fulfillment details",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_confirm",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order": {
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "81",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "56",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      }
                    ]
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "state": {
                      "descriptor": {
                        "code": "DRIVER_EN_ROUTE",
                        "name": "Driver is on the way"
                      }
                    },
                    "start": {
                      "authorization": {
                        "type": "OTP",
                        "token": "234234"
                      },
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  },
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT",
                    "params": {
                      "amount": "81",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "on_track": {
        "examples": [
          {
            "summary": "Return tracking information for an order",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T05:41:09Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "message_id": "ec3dea8c-c64c-4f06-b2a0-ec1f9584d7ba",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_track",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "tracking": {
                  "content_type": "application/json",
                  "url": "https://api.beckn.juspay.in/dobpp/ui/driver/location/abc9f0aa-bbfd-4e91-b378-41feee12f05f",
                  "status": "active"
                }
              }
            }
          }
        ]
      },
      "on_cancel": {
        "examples": [
          {
            "summary": "Return order cancelled by rider with cancellation charges",
            "value": {
              "context": {
                "action": "on_cancel",
                "bap_id": "example-bap.com",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "bpp_id": "example-bpp.com",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "city": "std:080",
                "core_version": "0.9.4",
                "country": "IND",
                "domain": "nic2004:60221",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "timestamp": "2023-03-23T04:48:53Z",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b"
              },
              "message": {
                "order": {
                  "fulfillment": {
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/code": "localization",
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "address": {
                          "area_code": "",
                          "building": "Rangadore Memorial Hospital",
                          "city": "Bengaluru",
                          "country": "India",
                          "door": null,
                          "locality": "Basavanagudi",
                          "state": "Karnataka",
                          "street": "Chikkanna Garden",
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital"
                        },
                        "gps": "12.9711869, 77.5868122"
                      }
                    },
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "start": {
                      "authorization": {
                        "token": "234234",
                        "type": "OTP"
                      },
                      "location": {
                        "address": {
                          "area_code": "560061",
                          "building": "6th Main Rd",
                          "city": "Bengaluru",
                          "country": "India",
                          "door": "98A, Sarovarm 2nd cross",
                          "locality": "Uttarahalli Hobli",
                          "state": "Karnataka 560061",
                          "street": "Ramanjaneyanagar",
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar"
                        },
                        "gps": "13.008935, 77.6444085"
                      }
                    },
                    "state": {
                      "descriptor": {
                        "code": "DRIVER_EN_ROUTE",
                        "name": "Driver is on the way"
                      }
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    }
                  },
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "items": [
                    {
                      "descriptor": {
                        "code": "RIDE",
                        "name": "Auto Ride"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "payment_id": "1",
                      "tags": {
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/code": "info",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/value": "3 min"
                      }
                    }
                  ],
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "params": {
                      "amount": "30",
                      "bank_account": "32754478993",
                      "bank_account_name": "RAGHAVENDRA J",
                      "bank_code": "SBIN0000575",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    },
                    "time": {
                      "duration": "P1D"
                    },
                    "type": "POST-FULFILLMENT"
                  },
                  "provider": {
                    "descriptor": {
                      "name": "Raghavendra J"
                    },
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3"
                  },
                  "quote": {
                    "breakup": [
                      {
                        "price": {
                          "currency": "INR",
                          "value": "30"
                        },
                        "title": "Cancellation charges"
                      }
                    ],
                    "currency": "INR",
                    "value": "30"
                  }
                }
              }
            }
          },
          {
            "summary": "Return order cancelled by the driver",
            "value": {
              "context": {
                "action": "on_cancel",
                "bap_id": "example-bap.com",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1",
                "bpp_id": "example-bpp.com",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "city": "std:080",
                "core_version": "0.9.4",
                "country": "IND",
                "domain": "nic2004:60221",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "timestamp": "2023-03-23T04:48:53Z",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b"
              },
              "message": {
                "order": {
                  "fulfillment": {
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/code": "localization",
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "address": {
                          "area_code": "",
                          "building": "Rangadore Memorial Hospital",
                          "city": "Bengaluru",
                          "country": "India",
                          "door": null,
                          "locality": "Basavanagudi",
                          "state": "Karnataka",
                          "street": "Chikkanna Garden",
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital"
                        },
                        "gps": "12.9711869, 77.5868122"
                      }
                    },
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "start": {
                      "authorization": {
                        "token": "234234",
                        "type": "OTP"
                      },
                      "location": {
                        "address": {
                          "area_code": "560061",
                          "building": "6th Main Rd",
                          "city": "Bengaluru",
                          "country": "India",
                          "door": "98A, Sarovarm 2nd cross",
                          "locality": "Uttarahalli Hobli",
                          "state": "Karnataka 560061",
                          "street": "Ramanjaneyanagar",
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar"
                        },
                        "gps": "13.008935, 77.6444085"
                      }
                    },
                    "state": {
                      "descriptor": {
                        "code": "RIDE_CANCELLED",
                        "name": "Oops! The driver had to cancel"
                      }
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    }
                  },
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "items": [
                    {
                      "descriptor": {
                        "code": "RIDE",
                        "name": "Auto Ride"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "payment_id": "1",
                      "tags": {
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, hance of return trip, etc.",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/code": "info",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/value": "3 min"
                      }
                    }
                  ],
                  "payments": [
                    {
                      "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                      "params": {
                        "amount": "0",
                        "currency": "INR",
                        "transaction_status": "CANCELLED"
                      },
                      "type": "POST-FULFILLMENT"
                    }
                  ],
                  "provider": {
                    "descriptor": {
                      "name": "Raghavendra J"
                    },
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3"
                  },
                  "quote": {
                    "currency": "INR",
                    "value": "0"
                  }
                }
              }
            }
          }
        ]
      },
      "on_update": {
        "examples": [
          {
            "summary": "Return updated order with payment transaction status",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_confirm",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "update_target": "order.payment",
                "order": {
                  "id": "ABC1234",
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "81",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "56",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      }
                    ]
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "state": {
                      "descriptor": {
                        "code": "PAYMENT_COLLECTED",
                        "name": "Payment received"
                      }
                    },
                    "start": {
                      "authorization": {
                        "type": "OTP",
                        "token": "234234"
                      },
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  },
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT",
                    "params": {
                      "amount": "81",
                      "currency": "INR",
                      "transaction_status": "PAID"
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Return updated order with recomputed charges",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_confirm",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "update_target": "order.payment, order.quote",
                "order": {
                  "id": "ABC1234",
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "75",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "40",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      }
                    ]
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "state": {
                      "descriptor": {
                        "code": "RIDE_ENDED",
                        "name": "Your ride has ended"
                      }
                    },
                    "start": {
                      "authorization": {
                        "type": "OTP",
                        "token": "234234"
                      },
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  },
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT",
                    "params": {
                      "amount": "75",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "on_status": {
        "examples": [
          {
            "summary": "Return order with status - Driver at pickup",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_status",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order": {
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "81",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "56",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      }
                    ]
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "state": {
                      "descriptor": {
                        "code": "DRIVER_AT_PICKUP",
                        "name": "Driver Arrived at Pickup Location"
                      }
                    },
                    "start": {
                      "authorization": {
                        "type": "OTP",
                        "token": "234234"
                      },
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  },
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT",
                    "params": {
                      "amount": "81",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Return order with latest fulfillment status - Driver en-route to pickup",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_status",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order": {
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "81",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "56",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      }
                    ]
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "state": {
                      "descriptor": {
                        "code": "DRIVER_EN_ROUTE_TO_PICKUP",
                        "name": "Driver is en-route to your location"
                      }
                    },
                    "start": {
                      "authorization": {
                        "type": "OTP",
                        "token": "234234"
                      },
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  },
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT",
                    "params": {
                      "amount": "81",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Return order with latest status - Ride started",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_status",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order": {
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "81",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "56",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      }
                    ]
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "state": {
                      "descriptor": {
                        "code": "RIDE_STARTED",
                        "name": "Your ride has started"
                      }
                    },
                    "start": {
                      "authorization": {
                        "type": "OTP",
                        "token": "234234"
                      },
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  },
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT",
                    "params": {
                      "amount": "81",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Return order with latest status - Ride Ended",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T04:48:53Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
                "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_status",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "order": {
                  "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                  "provider": {
                    "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                    "descriptor": {
                      "name": "Raghavendra J"
                    }
                  },
                  "items": [
                    {
                      "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                      "descriptor": {
                        "name": "Auto Ride",
                        "code": "RIDE"
                      },
                      "tags": {
                        "groups/1/descriptor/name": "Daytime Charges",
                        "groups/1/descriptor/code": "fare_policy",
                        "groups/1/display": true,
                        "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                        "groups/1/list/1/value": "₹ 30 upto 2 km",
                        "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                        "groups/1/list/2/descriptor/code": "extra_fare",
                        "groups/1/list/2/value": "₹15 / km",
                        "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                        "groups/1/list/3/descriptor/code": "pickup_charges",
                        "groups/1/list/3/value": "₹ 10",
                        "groups/1/list/4/descriptor/name": "Nominal Fare",
                        "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/4/descriptor/code": "nominal_fare",
                        "groups/1/list/4/value": "₹ 10",
                        "groups/1/list/5/descriptor/name": "Nominal Fare",
                        "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                        "groups/1/list/5/descriptor/code": "waiting_charges",
                        "groups/1/list/5/value": "₹ 0 / min",
                        "groups/2/descriptor/name": "Waiting Charges",
                        "groups/2/descriptor/code": "fare_policy",
                        "groups/2/display": true,
                        "groups/2/list/1/descriptor/name": "Night Charges",
                        "groups/2/list/1/descriptor/code": "night_charges",
                        "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
                        "groups/2/list/2/descriptor/name": "Night Shift Start",
                        "groups/2/list/2/descriptor/code": "night_shift_start_time",
                        "groups/2/list/2/value": "22:00:00",
                        "groups/2/list/3/descriptor/name": "Night Shift End",
                        "groups/2/list/3/descriptor/code": "night_shift_end_time",
                        "groups/2/list/3/value": "05:00:00",
                        "groups/3/descriptor/name": "General Information",
                        "groups/3/descriptor/code": "info",
                        "groups/3/display": true,
                        "groups/3/list/1/descriptor/name": "Distance to nearest driver",
                        "groups/3/list/1/descriptor/code": "distance_to_nearest_driver",
                        "groups/3/list/1/value": "661 m",
                        "groups/3/list/2/descriptor/name": "Wait time upto",
                        "groups/3/list/2/descriptor/code": "waiting_time_estimated_threshold",
                        "groups/3/list/2/value": "3 min"
                      },
                      "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                      "payment_id": "1"
                    }
                  ],
                  "quote": {
                    "value": "81",
                    "currency": "INR",
                    "breakup": [
                      {
                        "title": "Base Fare",
                        "price": {
                          "value": "30",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "Per km fare",
                        "price": {
                          "value": "56",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "value": "2.5",
                          "currency": "INR"
                        }
                      }
                    ]
                  },
                  "fulfillment": {
                    "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "state": {
                      "descriptor": {
                        "code": "RIDE_ENDED",
                        "name": "Your ride has ended"
                      }
                    },
                    "start": {
                      "authorization": {
                        "type": "OTP",
                        "token": "234234"
                      },
                      "location": {
                        "gps": "13.008935, 77.6444085",
                        "address": {
                          "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                          "country": "India",
                          "building": "6th Main Rd",
                          "state": "Karnataka 560061",
                          "city": "Bengaluru",
                          "locality": "Uttarahalli Hobli",
                          "door": "98A, Sarovarm 2nd cross",
                          "area_code": "560061",
                          "street": "Ramanjaneyanagar"
                        }
                      }
                    },
                    "end": {
                      "location": {
                        "gps": "12.9711869, 77.5868122",
                        "address": {
                          "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                          "country": "India",
                          "building": "Rangadore Memorial Hospital",
                          "state": "Karnataka",
                          "city": "Bengaluru",
                          "locality": "Basavanagudi",
                          "door": null,
                          "area_code": "",
                          "street": "Chikkanna Garden"
                        }
                      }
                    },
                    "agent": {
                      "name": "RAGHAVENDRA J",
                      "phone": "+91-98978675645",
                      "rateable": true,
                      "rating": "5"
                    },
                    "vehicle": {
                      "category": "AUTO_RICKSHAW",
                      "registration": "KA01JG1231"
                    },
                    "customer": {
                      "person": {
                        "name": "John Doe",
                        "phone": "+91-9897867564",
                        "tags": {
                          "groups/1/descriptor/name": "Localization",
                          "groups/1/descriptor/code": "localization",
                          "groups/1/display": false,
                          "groups/1/list/1/descriptor/code": "lang",
                          "groups/1/list/1/descriptor/name": "Language",
                          "groups/1/list/1/value": "en"
                        }
                      }
                    }
                  },
                  "payment": {
                    "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                    "type": "ON-FULFILLMENT",
                    "params": {
                      "amount": "81",
                      "currency": "INR",
                      "transaction_status": "NOT-PAID"
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "on_rating": {
        "examples": [
          {
            "summary": "Return acknowledgement of rating and feedback",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T05:41:15Z",
                "bap_id": "api.beckn.juspay.in/pilot/bap/cab/v1",
                "bpp_id": "api.beckn.juspay.in/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "message_id": "2a17e268-1dc4-4d1a-98a2-17554a50c7d2",
                "city": "Bangalore",
                "core_version": "0.9.4",
                "action": "on_rating",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "feedback_ack": true,
                "rating_ack": true
              }
            }
          }
        ]
      },
      "on_support": {
        "examples": [
          {
            "summary": "Return support information related to an order",
            "value": {
              "context": {
                "country": "IND",
                "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "domain": "nic2004:60221",
                "timestamp": "2023-03-23T05:41:09Z",
                "bap_id": "example-bap.com",
                "bpp_id": "example-bpp.com",
                "message_id": "ec3dea8c-c64c-4f06-b2a0-ec1f9584d7ba",
                "city": "std:080",
                "core_version": "0.9.4",
                "action": "on_support",
                "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
              },
              "message": {
                "phone": "+918068870525",
                "email": "support@nammayatri.in",
                "url": "https://support.nammayatri.com/gethelp"
              }
            }
          }
        ]
      }
    },
    "public-transit": {
      "select": {
        "examples": [
          {
            "summary": "Get a quote for a fare product selected from a public transit catalog",
            "value": {
              "context": null,
              "domain": "nic2004:60221",
              "country": "IND",
              "city": "std:080",
              "action": "select",
              "core_version": "0.9.4",
              "bap_id": "https://example-bap.com",
              "bap_uri": "https://mock_bap.com/beckn/",
              "bpp_id": "https://kmrl-bpp.com",
              "bpp_uri": "https://kmrl-bpp.com/beckn/",
              "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
              "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
              "timestamp": "2021-03-23T10:00:40.065Z"
            },
            "message": {
              "order": {
                "items": [
                  {
                    "id": "1"
                  }
                ],
                "provider": {
                  "id": "1"
                }
              }
            }
          }
        ]
      },
      "init": {
        "examples": [
          {
            "summary": "Initialize the order by providing billing details",
            "value": {
              "context": {
                "domain": "nic2004:60221",
                "country": "IND",
                "city": "std:080",
                "action": "init",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://mock_bap.com/beckn/",
                "bpp_id": "https://kmrl-bpp.com",
                "bpp_uri": "https://kmrl-bpp.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "items": [
                    {
                      "id": "1"
                    }
                  ],
                  "provider": {
                    "id": "1"
                  },
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  }
                }
              }
            }
          }
        ]
      },
      "confirm": {
        "examples": [
          {
            "summary": "Confirm ticket booking",
            "value": {
              "context": {
                "domain": "nic2004:60221",
                "country": "IND",
                "city": "std:080",
                "action": "confirm",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://mock_bap.com/beckn/",
                "bpp_id": "https://kmrl-bpp.com",
                "bpp_uri": "https://kmrl-bpp.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "items": [
                    {
                      "id": "1"
                    }
                  ],
                  "provider": {
                    "id": "1"
                  },
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "payment": {
                    "params": {
                      "amount": "55",
                      "currency": "INR",
                      "transaction_id": "24566345563"
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "cancel": {
        "examples": [
          {
            "summary": "Cancel a transit ticket booking before the cancellation period",
            "value": {
              "context": {
                "domain": "nic2008:49213",
                "country": "IND",
                "city": "std:011",
                "action": "cancel",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://api.example-bap.com/beckn/",
                "bpp_id": "https://transit-solutions.com",
                "bpp_uri": "https://api.transit-solutions.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "id": "123413",
                  "cancellation_reason_id": "2"
                }
              }
            }
          }
        ]
      },
      "status": {
        "examples": [
          {
            "summary": "Get latest status of a transit ticket booking",
            "value": {
              "context": {
                "domain": "nic2008:49213",
                "country": "IND",
                "city": "std:011",
                "action": "status",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://api.example-bap.com/beckn/",
                "bpp_id": "https://transit-solutions.com",
                "bpp_uri": "https://api.transit-solutions.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order_id": "123413"
              }
            }
          }
        ]
      },
      "on_search": {
        "examples": [
          {
            "summary": "Return a public transit catalog of fare products",
            "value": {
              "context": {
                "domain": "nic2008:49213",
                "country": "IND",
                "city": "std:011",
                "action": "on_search",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://mock_bap.com/beckn/",
                "bpp_id": "https://transit-solutions.com",
                "bpp_uri": "https://api.transit-solutions.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "catalog": {
                  "bpp/descriptor": {
                    "name": "Transit Solutions",
                    "images": [
                      "https://transitsolutions.in/logos/logo.ico"
                    ]
                  },
                  "bpp/providers": [
                    {
                      "id": "1",
                      "descriptor": {
                        "name": "Delhi Metro Rail Limited",
                        "images": [
                          "https://delhimetrorail.com/logos/logo.ico"
                        ]
                      },
                      "items": [
                        {
                          "id": "1",
                          "descriptor": {
                            "name": "Single Journey Ticket",
                            "images": [
                              "https://delhimetrorail.com/icons/sjt.ico"
                            ]
                          },
                          "fulfillment_id": "1",
                          "price": {
                            "currency": "35",
                            "value": "INR"
                          }
                        },
                        {
                          "id": "2",
                          "descriptor": {
                            "name": "Single Journey Ticket",
                            "images": [
                              "https://delhimetrorail.com/icons/sjt.ico"
                            ]
                          },
                          "fulfillment_id": "2",
                          "price": {
                            "currency": "65",
                            "value": "INR"
                          }
                        },
                        {
                          "id": "3",
                          "descriptor": {
                            "name": "Single Journey Ticket",
                            "images": [
                              "https://delhimetrorail.com/icons/sjt.ico"
                            ]
                          },
                          "fulfillment_id": "3",
                          "price": {
                            "currency": "55",
                            "value": "INR"
                          }
                        },
                        {
                          "id": "4",
                          "descriptor": {
                            "name": "Return Journey Ticket",
                            "images": [
                              "https://delhimetrorail.com/icons/rjt.ico"
                            ]
                          },
                          "fulfillment_id": "1",
                          "price": {
                            "currency": "60",
                            "value": "INR"
                          }
                        },
                        {
                          "id": "5",
                          "descriptor": {
                            "name": "Return Journey Ticket",
                            "images": [
                              "https://delhimetrorail.com/icons/rjt.ico"
                            ]
                          },
                          "fulfillment_id": "2",
                          "price": {
                            "currency": "90",
                            "value": "INR"
                          }
                        },
                        {
                          "id": "6",
                          "descriptor": {
                            "name": "Return Journey Ticket",
                            "images": [
                              "https://delhimetrorail.com/icons/rjt.ico"
                            ]
                          },
                          "fulfillment_id": "3",
                          "price": {
                            "currency": "100",
                            "value": "INR"
                          }
                        },
                        {
                          "id": "7",
                          "descriptor": {
                            "name": "Monthly Pass",
                            "images": [
                              "https://delhimetrorail.com/icons/mp.ico"
                            ]
                          },
                          "price": {
                            "currency": "INR",
                            "value": "250"
                          }
                        }
                      ],
                      "fulfillments": [
                        {
                          "id": "1",
                          "start": {
                            "location": {
                              "descriptor": {
                                "name": "Dwarka Sector 10 - Blue Line"
                              },
                              "gps": "28.5811261,77.0548206"
                            }
                          },
                          "end": {
                            "location": {
                              "descriptor": {
                                "name": "Patel Chowk - Yellow Line"
                              },
                              "gps": "28.6230972,77.2099917"
                            }
                          },
                          "vehicle": {
                            "category": "METRO"
                          },
                          "tags": {
                            "groups/0/list/0/descriptor/name": "Transfers",
                            "groups/0/list/0/value": "1",
                            "groups/0/list/1/descriptor/name": "Duration",
                            "groups/0/list/1/value": "60 min"
                          }
                        },
                        {
                          "id": "2",
                          "start": {
                            "location": {
                              "descriptor": {
                                "name": "Dwarka Sector 10 - Blue Line"
                              },
                              "gps": "28.5811261,77.0548206"
                            }
                          },
                          "end": {
                            "location": {
                              "descriptor": {
                                "name": "Shivaji Stadium -  Airport Express Line"
                              },
                              "gps": "28.6288785,77.2085895"
                            }
                          },
                          "vehicle": {
                            "category": "METRO"
                          },
                          "tags": {
                            "groups/0/list/0/descriptor/name": "Transfers",
                            "groups/0/list/0/value": "1",
                            "groups/0/list/1/descriptor/name": "Duration",
                            "groups/0/list/1/value": "45 min"
                          }
                        },
                        {
                          "id": "3",
                          "start": {
                            "location": {
                              "descriptor": {
                                "name": "Dwarka Sector 21"
                              },
                              "gps": "9.05,12.06"
                            },
                            "time": {
                              "timestamp": "2021-10-15T00:32:19.000Z"
                            }
                          },
                          "end": {
                            "location": {
                              "descriptor": {
                                "name": "Shivaji Stadium"
                              },
                              "gps": "9.07,12.07"
                            },
                            "time": {
                              "timestamp": "2021-10-15T00:43:21.000Z"
                            }
                          },
                          "vehicle": {
                            "category": "METRO"
                          },
                          "tags": {
                            "groups/0/list/0/descriptor/name": "Transfers",
                            "groups/0/list/0/value": "0",
                            "groups/0/list/1/descriptor/name": "Duration",
                            "groups/0/list/1/value": "30 min"
                          }
                        }
                      ],
                      "tags": {
                        "groups/0/list/0/descriptor/name": "Timetable",
                        "groups/0/list/0/value": "https://delhimetrorail.com/timetable.html",
                        "groups/0/list/1/descriptor/name": "GTFS Schedule",
                        "groups/0/list/1/value": "https://delhimetrorail.com/gtfs",
                        "groups/0/list/1/display": false
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "on_select": {
        "examples": [
          {
            "summary": "Return a quote offered by a public transit service provider",
            "value": {
              "context": null,
              "domain": "nic2008:49213",
              "country": "IND",
              "city": "std:011",
              "action": "on_select",
              "core_version": "0.9.4",
              "bap_id": "https://example-bap.com",
              "bap_uri": "https://mock_bap.com/beckn/",
              "bpp_id": "https://transit-solutions.com",
              "bpp_uri": "https://api.transit-solutions.com/beckn/",
              "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
              "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
              "timestamp": "2021-03-23T10:00:40.065Z"
            },
            "message": {
              "order": {
                "id": "123413",
                "items": [
                  {
                    "id": "3",
                    "descriptor": {
                      "name": "Single Journey Ticket",
                      "images": [
                        "https://delhimetrorail.com/icons/sjt.ico"
                      ]
                    },
                    "fulfillment_id": "3",
                    "price": {
                      "currency": "55",
                      "value": "INR"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Validity",
                      "groups/0/list/0/value": "24 hours from the time of purchase"
                    }
                  }
                ],
                "provider": {
                  "id": "1",
                  "descriptor": {
                    "name": "Delhi Metro Rail Limited",
                    "images": [
                      "https://delhimetrorail.com/logos/logo.ico"
                    ]
                  }
                },
                "fulfillment": {
                  "id": "3",
                  "start": {
                    "location": {
                      "descriptor": {
                        "name": "Dwarka Sector 21"
                      },
                      "gps": "9.05,12.06"
                    },
                    "time": {
                      "timestamp": "2021-10-15T00:32:19.000Z"
                    }
                  },
                  "end": {
                    "location": {
                      "descriptor": {
                        "name": "Shivaji Stadium"
                      },
                      "gps": "9.07,12.07"
                    },
                    "time": {
                      "timestamp": "2021-10-15T00:43:21.000Z"
                    }
                  },
                  "vehicle": {
                    "category": "METRO"
                  },
                  "tags": {
                    "groups/0/list/0/descriptor/name": "Transfers",
                    "groups/0/list/0/value": "0",
                    "groups/0/list/1/descriptor/name": "Duration",
                    "groups/0/list/1/value": "30 min"
                  }
                },
                "quote": {
                  "price": {
                    "value": "60.5",
                    "currency": "INR"
                  },
                  "breakup": [
                    {
                      "title": "Single Journey Ticket X 1",
                      "price": {
                        "currency": "INR",
                        "value": "55"
                      }
                    },
                    {
                      "title": "CGST @ 5%",
                      "price": {
                        "currency": "INR",
                        "value": "2.75"
                      }
                    },
                    {
                      "title": "SGST @ 5%",
                      "price": {
                        "currency": "INR",
                        "value": "2.75"
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "on_init": {
        "examples": [
          {
            "summary": "Return draft order for transit ticket with settlement via payment link",
            "value": {
              "context": {
                "domain": "nic2008:49213",
                "country": "IND",
                "city": "std:011",
                "action": "on_init",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://api.example-bap.com/beckn/",
                "bpp_id": "https://transit-solutions.com",
                "bpp_uri": "https://api.transit-solutions.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "items": [
                    {
                      "id": "3",
                      "descriptor": {
                        "name": "Single Journey Ticket",
                        "images": [
                          "https://delhimetrorail.com/icons/sjt.ico"
                        ]
                      },
                      "fulfillment_id": "3",
                      "price": {
                        "currency": "55",
                        "value": "INR"
                      },
                      "tags": {
                        "groups/0/list/0/descriptor/name": "Validity",
                        "groups/0/list/0/value": "24 hours from the time of purchase"
                      }
                    }
                  ],
                  "provider": {
                    "id": "1",
                    "descriptor": {
                      "name": "Delhi Metro Rail Limited",
                      "images": [
                        "https://delhimetrorail.com/logos/logo.ico"
                      ]
                    }
                  },
                  "fulfillment": {
                    "id": "3",
                    "start": {
                      "location": {
                        "descriptor": {
                          "name": "Dwarka Sector 21"
                        },
                        "gps": "9.05,12.06"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:32:19.000Z"
                      },
                      "instructions": "Show this ticket at the QR code scanner at the entry gate. If the QR code scanner is not present, show this at the ticket counter to get your token"
                    },
                    "end": {
                      "location": {
                        "descriptor": {
                          "name": "Shivaji Stadium"
                        },
                        "gps": "9.07,12.07"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:43:21.000Z"
                      }
                    },
                    "vehicle": {
                      "category": "METRO"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Transfers",
                      "groups/0/list/0/value": "0",
                      "groups/0/list/1/descriptor/name": "Duration",
                      "groups/0/list/1/value": "30 min"
                    }
                  },
                  "documents": [
                    {
                      "label": "Cancellation Terms",
                      "url": "https://dmrc.com/fare_products/sjt/cancellation_terms.html"
                    }
                  ],
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "quote": {
                    "price": {
                      "currency": "60.5",
                      "value": "INR"
                    },
                    "breakup": [
                      {
                        "title": "Single Journey Ticket X 1",
                        "price": {
                          "currency": "INR",
                          "value": "55"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      }
                    ]
                  },
                  "payment": {
                    "type": "ON-ORDER",
                    "uri": "https://pay.razorpay.com?amt=60.5&cur=INR&ref=24566345563",
                    "tl_method": "GET",
                    "status": "NOT-PAID"
                  }
                }
              }
            }
          },
          {
            "summary": "Return draft order for transit ticket with T+1 settlment via bank transfer",
            "value": {
              "context": {
                "domain": "nic2008:49213",
                "country": "IND",
                "city": "std:011",
                "action": "on_init",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://api.example-bap.com/beckn/",
                "bpp_id": "https://transit-solutions.com",
                "bpp_uri": "https://api.transit-solutions.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "items": [
                    {
                      "id": "3",
                      "descriptor": {
                        "name": "Single Journey Ticket",
                        "images": [
                          "https://delhimetrorail.com/icons/sjt.ico"
                        ]
                      },
                      "fulfillment_id": "3",
                      "price": {
                        "currency": "55",
                        "value": "INR"
                      },
                      "tags": {
                        "groups/0/list/0/descriptor/name": "Validity",
                        "groups/0/list/0/value": "24 hours from the time of purchase"
                      }
                    }
                  ],
                  "provider": {
                    "id": "1",
                    "descriptor": {
                      "name": "Delhi Metro Rail Limited",
                      "images": [
                        "https://delhimetrorail.com/logos/logo.ico"
                      ]
                    }
                  },
                  "fulfillment": {
                    "id": "3",
                    "start": {
                      "location": {
                        "descriptor": {
                          "name": "Dwarka Sector 21"
                        },
                        "gps": "9.05,12.06"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:32:19.000Z"
                      },
                      "instructions": "Show this ticket at the QR code scanner at the entry gate. If the QR code scanner is not present, show this at the ticket counter to get your token"
                    },
                    "end": {
                      "location": {
                        "descriptor": {
                          "name": "Shivaji Stadium"
                        },
                        "gps": "9.07,12.07"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:43:21.000Z"
                      }
                    },
                    "vehicle": {
                      "category": "METRO"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Transfers",
                      "groups/0/list/0/value": "0",
                      "groups/0/list/1/descriptor/name": "Duration",
                      "groups/0/list/1/value": "30 min"
                    }
                  },
                  "documents": [
                    {
                      "label": "Cancellation Terms",
                      "url": "https://dmrc.com/fare_products/sjt/cancellation_terms.html"
                    }
                  ],
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "quote": {
                    "price": {
                      "currency": "60.5",
                      "value": "INR"
                    },
                    "breakup": [
                      {
                        "title": "Single Journey Ticket X 1",
                        "price": {
                          "currency": "INR",
                          "value": "55"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      }
                    ]
                  },
                  "payment": {
                    "type": "POST-FULFILLMENT",
                    "status": "NOT-PAID",
                    "params": {
                      "amount": "60.5",
                      "currency": "INR",
                      "transaction_id": "24566345563",
                      "bank_account": "32756678999",
                      "bank_code": "SBIN0000575"
                    },
                    "time": {
                      "range": {
                        "start": "2021-03-23T10:00:40.065Z",
                        "end": "2021-03-24T10:00:40.065Z"
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "on_confirm": {
        "examples": [
          {
            "summary": "Return confirmed ticket order with payment confirmation",
            "value": {
              "context": {
                "domain": "nic2008:49213",
                "country": "IND",
                "city": "std:011",
                "action": "on_confirm",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://api.example-bap.com/beckn/",
                "bpp_id": "https://transit-solutions.com",
                "bpp_uri": "https://api.transit-solutions.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "id": "123413",
                  "items": [
                    {
                      "id": "3",
                      "descriptor": {
                        "name": "Single Journey Ticket",
                        "images": [
                          "https://delhimetrorail.com/icons/sjt.ico"
                        ]
                      },
                      "fulfillment_id": "3",
                      "price": {
                        "currency": "55",
                        "value": "INR"
                      },
                      "tags": {
                        "groups/0/list/0/descriptor/name": "Validity",
                        "groups/0/list/0/value": "24 hours from the time of purchase"
                      }
                    }
                  ],
                  "provider": {
                    "id": "1",
                    "descriptor": {
                      "name": "Delhi Metro Rail Limited",
                      "images": [
                        "https://delhimetrorail.com/logos/logo.ico"
                      ]
                    }
                  },
                  "fulfillment": {
                    "id": "3",
                    "start": {
                      "location": {
                        "descriptor": {
                          "name": "Dwarka Sector 21"
                        },
                        "gps": "9.05,12.06"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:32:19.000Z"
                      },
                      "instructions": "Show this ticket at the QR code scanner at the entry gate. If the QR code scanner is not present, show this at the ticket counter to get your token"
                    },
                    "end": {
                      "location": {
                        "descriptor": {
                          "name": "Shivaji Stadium"
                        },
                        "gps": "9.07,12.07"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:43:21.000Z"
                      }
                    },
                    "vehicle": {
                      "category": "METRO"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Transfers",
                      "groups/0/list/0/value": "0",
                      "groups/0/list/1/descriptor/name": "Duration",
                      "groups/0/list/1/value": "30 min"
                    }
                  },
                  "documents": [
                    {
                      "label": "Cancellation Terms",
                      "url": "https://dmrc.com/fare_products/sjt/cancellation_terms.html"
                    }
                  ],
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "quote": {
                    "price": {
                      "currency": "60.5",
                      "value": "INR"
                    },
                    "breakup": [
                      {
                        "title": "Single Journey Ticket X 1",
                        "price": {
                          "currency": "INR",
                          "value": "55"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      }
                    ]
                  },
                  "payment": {
                    "type": "ON-ORDER",
                    "status": "PAID",
                    "params": {
                      "amount": "60.5",
                      "currency": "INR",
                      "transaction_id": "24566345563"
                    }
                  }
                }
              }
            }
          },
          {
            "summary": "Return confirmed ticket order with T+1 pending settlement",
            "value": {
              "context": {
                "domain": "nic2008:49213",
                "country": "IND",
                "city": "std:011",
                "action": "on_confirm",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://api.example-bap.com/beckn/",
                "bpp_id": "https://transit-solutions.com",
                "bpp_uri": "https://api.transit-solutions.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "id": "123413",
                  "items": [
                    {
                      "id": "3",
                      "descriptor": {
                        "name": "Single Journey Ticket",
                        "images": [
                          "https://delhimetrorail.com/icons/sjt.ico"
                        ]
                      },
                      "fulfillment_id": "3",
                      "price": {
                        "currency": "55",
                        "value": "INR"
                      },
                      "tags": {
                        "groups/0/list/0/descriptor/name": "Validity",
                        "groups/0/list/0/value": "24 hours from the time of purchase"
                      }
                    }
                  ],
                  "provider": {
                    "id": "1",
                    "descriptor": {
                      "name": "Delhi Metro Rail Limited",
                      "images": [
                        "https://delhimetrorail.com/logos/logo.ico"
                      ]
                    }
                  },
                  "fulfillment": {
                    "id": "3",
                    "state": {
                      "descriptor": {
                        "name": "Ticket issued"
                      }
                    },
                    "start": {
                      "location": {
                        "descriptor": {
                          "name": "Dwarka Sector 21"
                        },
                        "gps": "9.05,12.06"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:32:19.000Z"
                      },
                      "instructions": "Show this ticket at the QR code scanner at the entry gate. If the QR code scanner is not present, show this at the ticket counter to get your token"
                    },
                    "end": {
                      "location": {
                        "descriptor": {
                          "name": "Shivaji Stadium"
                        },
                        "gps": "9.07,12.07"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:43:21.000Z"
                      }
                    },
                    "vehicle": {
                      "category": "METRO"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Transfers",
                      "groups/0/list/0/value": "0",
                      "groups/0/list/1/descriptor/name": "Duration",
                      "groups/0/list/1/value": "30 min"
                    }
                  },
                  "documents": [
                    {
                      "label": "Cancellation Terms",
                      "url": "https://dmrc.com/fare_products/sjt/cancellation_terms.html"
                    }
                  ],
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "quote": {
                    "price": {
                      "currency": "60.5",
                      "value": "INR"
                    },
                    "breakup": [
                      {
                        "title": "Single Journey Ticket X 1",
                        "price": {
                          "currency": "INR",
                          "value": "55"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      }
                    ]
                  },
                  "payment": {
                    "type": "POST-FULFILLMENT",
                    "status": "NOT-PAID",
                    "params": {
                      "amount": "60.5",
                      "currency": "INR",
                      "transaction_id": "24566345563",
                      "bank_account": "32756678999",
                      "bank_code": "SBIN0000575"
                    },
                    "time": {
                      "range": {
                        "start": "2021-03-23T10:00:40.065Z",
                        "end": "2021-03-24T10:00:40.065Z"
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "on_cancel": {
        "examples": [
          {
            "summary": "Return cancelled ticket order with cancellation charges",
            "value": {
              "context": {
                "domain": "nic2008:49213",
                "country": "IND",
                "city": "std:011",
                "action": "on_cancel",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://api.example-bap.com/beckn/",
                "bpp_id": "https://transit-solutions.com",
                "bpp_uri": "https://api.transit-solutions.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "id": "123413",
                  "items": [
                    {
                      "id": "3",
                      "descriptor": {
                        "name": "Single Journey Ticket",
                        "images": [
                          "https://delhimetrorail.com/icons/sjt.ico"
                        ]
                      },
                      "fulfillment_id": "3",
                      "price": {
                        "currency": "55",
                        "value": "INR"
                      },
                      "tags": {
                        "groups/0/list/0/descriptor/name": "Validity",
                        "groups/0/list/0/value": "24 hours from the time of purchase"
                      }
                    }
                  ],
                  "provider": {
                    "id": "1",
                    "descriptor": {
                      "name": "Delhi Metro Rail Limited",
                      "images": [
                        "https://delhimetrorail.com/logos/logo.ico"
                      ]
                    }
                  },
                  "fulfillment": {
                    "id": "3",
                    "start": {
                      "location": {
                        "descriptor": {
                          "name": "Dwarka Sector 21"
                        },
                        "gps": "9.05,12.06"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:32:19.000Z"
                      },
                      "instructions": "Show this ticket at the QR code scanner at the entry gate. If the QR code scanner is not present, show this at the ticket counter to get your token"
                    },
                    "end": {
                      "location": {
                        "descriptor": {
                          "name": "Shivaji Stadium"
                        },
                        "gps": "9.07,12.07"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:43:21.000Z"
                      }
                    },
                    "vehicle": {
                      "category": "METRO"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Transfers",
                      "groups/0/list/0/value": "0",
                      "groups/0/list/1/descriptor/name": "Duration",
                      "groups/0/list/1/value": "30 min"
                    }
                  },
                  "documents": [
                    {
                      "label": "Cancellation Terms",
                      "url": "https://dmrc.com/fare_products/sjt/cancellation_terms.html"
                    }
                  ],
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "quote": {
                    "price": {
                      "currency": "60.5",
                      "value": "INR"
                    },
                    "breakup": [
                      {
                        "title": "Single Journey Ticket X 1",
                        "price": {
                          "currency": "INR",
                          "value": "55"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      }
                    ]
                  },
                  "payment": {
                    "type": "POST-FULFILLMENT",
                    "status": "NOT-PAID",
                    "params": {
                      "amount": "10",
                      "currency": "INR",
                      "bank_account": "32756678999",
                      "bank_code": "SBIN0000575"
                    },
                    "time": {
                      "range": {
                        "start": "2021-03-23T10:00:40.065Z",
                        "end": "2021-03-24T10:00:40.065Z"
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "on_status": {
        "examples": [
          {
            "summary": "Return transit ticket order with status - Ticket Issued",
            "value": {
              "context": {
                "domain": "nic2004:60221",
                "country": "IND",
                "city": "std:080",
                "action": "on_status",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://mock_bap.com/beckn/",
                "bpp_id": "https://kmrl-bpp.com",
                "bpp_uri": "https://kmrl-bpp.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "id": "123413",
                  "items": [
                    {
                      "id": "3",
                      "descriptor": {
                        "name": "Single Journey Ticket",
                        "images": [
                          "https://delhimetrorail.com/icons/sjt.ico"
                        ]
                      },
                      "fulfillment_id": "3",
                      "price": {
                        "currency": "55",
                        "value": "INR"
                      }
                    }
                  ],
                  "provider": {
                    "id": "1",
                    "descriptor": {
                      "name": "Delhi Metro Rail Limited",
                      "images": [
                        "https://delhimetrorail.com/logos/logo.ico"
                      ]
                    }
                  },
                  "fulfillment": {
                    "id": "3",
                    "state": {
                      "descriptor": {
                        "name": "Ticket Issued"
                      }
                    },
                    "start": {
                      "location": {
                        "descriptor": {
                          "name": "Dwarka Sector 21"
                        },
                        "gps": "9.05,12.06"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:32:19.000Z"
                      }
                    },
                    "end": {
                      "location": {
                        "descriptor": {
                          "name": "Shivaji Stadium"
                        },
                        "gps": "9.07,12.07"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:43:21.000Z"
                      }
                    },
                    "vehicle": {
                      "category": "METRO"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Transfers",
                      "groups/0/list/0/value": "0",
                      "groups/0/list/1/descriptor/name": "Duration",
                      "groups/0/list/1/value": "30 min"
                    }
                  },
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "quote": {
                    "price": {
                      "currency": "60.5",
                      "value": "INR"
                    },
                    "breakup": [
                      {
                        "title": "Single Journey Ticket X 1",
                        "price": {
                          "currency": "INR",
                          "value": "55"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      }
                    ]
                  },
                  "payment": {
                    "uri": "https://pay.razorpay.com?amt=60.5&cur=INR&ref=24566345563",
                    "params": {
                      "amount": "60.5",
                      "currency": "INR",
                      "transaction_id": "24566345563"
                    },
                    "status": "PAID"
                  }
                }
              }
            }
          },
          {
            "summary": "Return transit ticket order with status - Entered Paid Area",
            "value": {
              "context": {
                "domain": "nic2004:60221",
                "country": "IND",
                "city": "std:080",
                "action": "on_status",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://mock_bap.com/beckn/",
                "bpp_id": "https://kmrl-bpp.com",
                "bpp_uri": "https://kmrl-bpp.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "id": "123413",
                  "items": [
                    {
                      "id": "3",
                      "descriptor": {
                        "name": "Single Journey Ticket",
                        "images": [
                          "https://delhimetrorail.com/icons/sjt.ico"
                        ]
                      },
                      "fulfillment_id": "3",
                      "price": {
                        "currency": "55",
                        "value": "INR"
                      }
                    }
                  ],
                  "provider": {
                    "id": "1",
                    "descriptor": {
                      "name": "Delhi Metro Rail Limited",
                      "images": [
                        "https://delhimetrorail.com/logos/logo.ico"
                      ]
                    }
                  },
                  "fulfillment": {
                    "id": "3",
                    "state": {
                      "descriptor": {
                        "name": "Entered paid area"
                      }
                    },
                    "start": {
                      "location": {
                        "descriptor": {
                          "name": "Dwarka Sector 21"
                        },
                        "gps": "9.05,12.06"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:32:19.000Z"
                      }
                    },
                    "end": {
                      "location": {
                        "descriptor": {
                          "name": "Shivaji Stadium"
                        },
                        "gps": "9.07,12.07"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:43:21.000Z"
                      }
                    },
                    "vehicle": {
                      "category": "METRO"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Transfers",
                      "groups/0/list/0/value": "0",
                      "groups/0/list/1/descriptor/name": "Duration",
                      "groups/0/list/1/value": "30 min"
                    }
                  },
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "quote": {
                    "price": {
                      "currency": "60.5",
                      "value": "INR"
                    },
                    "breakup": [
                      {
                        "title": "Single Journey Ticket X 1",
                        "price": {
                          "currency": "INR",
                          "value": "55"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      }
                    ]
                  },
                  "payment": {
                    "uri": "https://pay.razorpay.com?amt=60.5&cur=INR&ref=24566345563",
                    "params": {
                      "amount": "60.5",
                      "currency": "INR",
                      "transaction_id": "24566345563"
                    },
                    "status": "PAID"
                  }
                }
              }
            }
          },
          {
            "summary": "Return transit ticket order with status - Exited paid area",
            "value": {
              "context": {
                "domain": "nic2004:60221",
                "country": "IND",
                "city": "std:080",
                "action": "on_status",
                "core_version": "0.9.4",
                "bap_id": "https://example-bap.com",
                "bap_uri": "https://mock_bap.com/beckn/",
                "bpp_id": "https://kmrl-bpp.com",
                "bpp_uri": "https://kmrl-bpp.com/beckn/",
                "transaction_id": "6f339232-2bc3-44d2-915c-30d2b053ce1d",
                "message_id": "fde8b8b6-c2e5-49f7-b254-720843d528bd",
                "timestamp": "2021-03-23T10:00:40.065Z"
              },
              "message": {
                "order": {
                  "id": "123413",
                  "items": [
                    {
                      "id": "3",
                      "descriptor": {
                        "name": "Single Journey Ticket",
                        "images": [
                          "https://delhimetrorail.com/icons/sjt.ico"
                        ]
                      },
                      "fulfillment_id": "3",
                      "price": {
                        "currency": "55",
                        "value": "INR"
                      }
                    }
                  ],
                  "provider": {
                    "id": "1",
                    "descriptor": {
                      "name": "Delhi Metro Rail Limited",
                      "images": [
                        "https://delhimetrorail.com/logos/logo.ico"
                      ]
                    }
                  },
                  "fulfillment": {
                    "id": "3",
                    "state": {
                      "descriptor": {
                        "name": "Exited paid area"
                      }
                    },
                    "start": {
                      "location": {
                        "descriptor": {
                          "name": "Dwarka Sector 21"
                        },
                        "gps": "9.05,12.06"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:32:19.000Z"
                      }
                    },
                    "end": {
                      "location": {
                        "descriptor": {
                          "name": "Shivaji Stadium"
                        },
                        "gps": "9.07,12.07"
                      },
                      "time": {
                        "timestamp": "2021-10-15T00:43:21.000Z"
                      }
                    },
                    "vehicle": {
                      "category": "METRO"
                    },
                    "tags": {
                      "groups/0/list/0/descriptor/name": "Transfers",
                      "groups/0/list/0/value": "0",
                      "groups/0/list/1/descriptor/name": "Duration",
                      "groups/0/list/1/value": "30 min"
                    }
                  },
                  "billing": {
                    "name": "John Doe",
                    "email": "john.doe@example.com"
                  },
                  "quote": {
                    "price": {
                      "currency": "60.5",
                      "value": "INR"
                    },
                    "breakup": [
                      {
                        "title": "Single Journey Ticket X 1",
                        "price": {
                          "currency": "INR",
                          "value": "55"
                        }
                      },
                      {
                        "title": "CGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      },
                      {
                        "title": "SGST @ 5%",
                        "price": {
                          "currency": "INR",
                          "value": "2.75"
                        }
                      }
                    ]
                  },
                  "payment": {
                    "uri": "https://pay.razorpay.com?amt=60.5&cur=INR&ref=24566345563",
                    "params": {
                      "amount": "60.5",
                      "currency": "INR",
                      "transaction_id": "24566345563"
                    },
                    "status": "PAID"
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}