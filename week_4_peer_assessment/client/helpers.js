

// this helper gets the data from the collection for the site-list Template
Template.siteList.helpers({
    'all_websites':function(){
        return Websites.find({"createdBy":Meteor.user().emails[0].address});
    },


    'safer_email':function(email){
        if (email.indexOf('@')!=-1){// we have an email
            return email.split('@')[0];
        }
        else{// probably anonymouse.
            return email;
        }
    }

});
Template.discussSite.helpers({
	'comments':function(siteId){
		console.log("testing");
	// complete the code here so that it reruns
		return Comments.find();
	// all the comments with a siteId equal to siteId.

	}
});
