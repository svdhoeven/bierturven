import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the AddUser element
 *
 * @constructor
 */
const AddUserView = View.extend({
    //Custom events for this view
    events: {
        'submit': 'submitHandler'
    },

    /** Initialize function, executed when the View is being constructed
     *
     */
    initialize: function(){

    },

    /** Handles a submit to the add user form, sending an AJAX request
     *
     * @param e
     */
    submitHandler: function(e){
        e.preventDefault();
        var name = $('#addUserName').val();
        $.ajax({
            dataType: "json",
            url: 'php/addUser.php',
            data: {
                name: name
            },
            complete: this.defaultCallback
        });
    },

    /** Resets the form data and triggers an users refresh
     *
     * @param data
     */
    defaultCallback: function(data){
        Backbone.trigger('getUsers');
        $('#addUserName').val('');
    }
});

export default AddUserView;