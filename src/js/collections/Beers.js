import {Collection} from 'backbone';
import Beer from '../models/Beer';

/**
 * Collection for the beers endpoint
 *
 * @constructor
 */
const Beers = Collection.extend({
    model: Beer,
    url: '/bierturven/beer'
});

export default Beers;
