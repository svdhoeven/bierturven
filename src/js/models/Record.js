import {Model} from 'backbone';

/**
 * Model for every history record in the collection
 *
 * @constructor
 */
const Record = Model.extend({
    defaults: {
        userId: 0,
        date: null,
        amount: 0,
        currentAmount: 0
    },

    urlRoot: '/history'
});

export default Record;