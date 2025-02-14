const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
	created_by_user: {
		type: String,
		required: true
	},
	userID: {
		type: String,
		required: true
	},
	Notification_name: {
		type: String,
		required: true,
	},
	Notification_description: {
		type: String,
	},
	Notification_link: {
		type: String,
		required: true,

	},
    Notification_post_date: {
		type: Date,
	},
	
});
const Noti = mongoose.model("Notification", NotificationSchema);
const fun = async() =>{


	const ppp = await new Noti({
		created_by_user: "Vikas",
        userID: 4522,
        Event_name: "temp",
        Event_link: "saf",
		
	})
	const updating2 = await ppp.save();
}

// fun();


// NotificationSchema.index({ "$**": "text" });
module.exports = Noti;
