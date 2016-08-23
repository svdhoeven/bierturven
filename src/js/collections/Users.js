import {Collection} from 'backbone';
import User from '../models/User';

/**
 * Collection for the users endpoint
 *
 * @constructor
 */
const Users = Collection.extend({
    model: User,
    url: '/bierturven/user'
});

export default Users;
