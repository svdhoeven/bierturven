import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the DeleteUser element
 *
 * @constructor
 */
const DeleteUserView = View.extend({
    events: {
        'submit': 'submitHandler'
    },

    /** Initialize function, executed when the View is being constructed
     *
     */
    initialize: function(){
        console.log("init deleteuser");
    },

    /** Handles a submit to the delete user form, sending an AJAX request
     *
     * @param e
     */
    submitHandler: function(e){
        e.preventDefault();
        console.log('delete user');
        var name = $('#deleteUserName').val();
        $.ajax({
            dataType: "json",
            url: 'php/deleteUser.php',
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
        $('#deleteUserName').val('');
    }
});

export default DeleteUserView;