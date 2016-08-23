import _ from 'underscore';
import $ from 'jquery';
import jQuery from 'jquery';
import {Events} from 'backbone';
import Users from './collections/Users';
import User from './models/User';
import UsersView from './views/UsersView';
import AddUserView from './views/AddUserView';
import DeleteUserView from './views/DeleteUserView';
import Beers from './collections/Beers';
import History from './collections/History';
import Record from './models/Record';
import Beer from './models/Beer';
import BeerView from './views/BeerView';
import BeerLockView from './views/BeerLockView';
import HistoryView from './views/HistoryView';

window.$ = $;
window.jQuery = jQuery;

(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();

        //Init collections for the Views
        let usersCollection = new Users();
        let beersCollection = new Beers();
        let historyCollection = new History();

        //Create new Views
        new BeerView({el: "#selectBeer", collection: beersCollection});
        new UsersView({el: "#users", collection: usersCollection});
        new AddUserView({el: "#addUser"});
        new DeleteUserView({el: "#deleteUser"});
        new BeerLockView({el: "#lock"});
        new HistoryView({el: "#history", collection: historyCollection});

        Backbone.history.start({pushState: true, root: '/bierturven/'});
    };

    window.addEventListener('load', init);
})();