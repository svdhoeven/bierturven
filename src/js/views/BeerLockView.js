import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the BeerLock element
 *
 * @constructor
 */
const BeerLockView = View.extend({
    events: {
        'click': 'lockClickHandler'
    },

    /** Initialize function, executed when the View is being constructed
     *
     */
    initialize: function ()
    {
    },

    /** Locks the choice of beer by toggling a class on this View
     *
     */
    lockClickHandler: function(){
        $('#lock').toggleClass('locked');
    }
});

export default BeerLockView;