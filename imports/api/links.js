import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');

function insertLink({ title, url }) {
    LinksCollection.insert({title, url, createdAt: new Date()});
}

export function PopuleLinks() {

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
};