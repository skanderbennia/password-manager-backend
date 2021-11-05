const mongoose = require("mongoose");
const { encrypt } = require("../utils/cryption");
const entrySchema = mongoose.Schema({
  app: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  groupe_id: { type: mongoose.Schema.Types.ObjectID, ref: "groupe" },
});
entrySchema.pre("save", function (next) {
  const master_password = "pppppppppppppppppppppppppppppppp";
  this.password = encrypt(this.password, master_password).password;
  next();
});

const Entry = mongoose.model("entry", entrySchema);

module.exports = Entry;
