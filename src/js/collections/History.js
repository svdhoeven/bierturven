import {Collection} from 'backbone';
import Record from '../models/Record';

/**
 * Collection for the history endpoint
 *
 * @constructor
 */
const History = Collection.extend({
    model: Record,
    url: '/bierturven/history'
});

export default History;
