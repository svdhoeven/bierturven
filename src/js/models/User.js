import {Model} from 'backbone';

/**
 * Model for every user in the collection
 *
 * @constructor
 */
const User = Model.extend({
    defaults: {
        name: "",
        beer: 0,
        dateCreated: null
    },

    url: '/bierturven/user'
});

export default User;