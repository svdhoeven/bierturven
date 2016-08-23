import {Model} from 'backbone';

/**
 * Model for every beer type in the collection
 *
 * @constructor
 */
const Beer = Model.extend({
    defaults: {
        type: "SmallA",
        value: 1
    },

    url: '/bierturven/beer'
});

export default Beer;