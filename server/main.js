import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Faça o Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Siga o Guia',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Leia a Documentação',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Forum de Discussões',
      url: 'https://forums.meteor.com'
    });
  }
});
