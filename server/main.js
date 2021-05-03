import { Meteor } from 'meteor/meteor';
import { LinksCollection, PopuleLinks } from '/imports/api/links';

Meteor.startup(() =>  {
    // If the Links collection is empty, add some data.
    if (LinksCollection.find().count() === 0) {
      PopuleLinks();
    }
});
