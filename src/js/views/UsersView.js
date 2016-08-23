import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the Users element
 *
 * @constructor
 */
const UsersView = View.extend({
    templateUsers: '',
    templateError: '',

    //Custom Events for this view
    events: {
        'click .addBeer': 'addBeerHandler',
        'click .substractBeer': 'substractBeerHandler',
        'getUsers': 'loadUsers'
    },

    /**
     * The constructor for UsersView, loads all Users into a template
     *
     */
    initialize: function ()
    {
        //Set templates to use later on
        this.templateUsers = _.template(this.$('#template-users').html());
        this.templateError = _.template(this.$('#template-error').html());

        this.loadUsers();

        //Listen to global events to refresh the users
        this.listenTo(Backbone,'getUsers',this.loadUsers);
    },

    /**
     * Wrapper function to load the users through the collection
     *
     * @param data
     */
    loadUsers: function (data)
    {
        this.collection.fetch({
            success: (collection) => this.loadUsersSuccessHandler(collection),
            error: (collection, response) => this.loadUsersErrorHandler(collection, response)
        });
    },

    /**
     * Success Handler will add HTML of Users to this $el
     *
     * @param collection
     */
    loadUsersSuccessHandler: function (collection)
    {
        this.$el.html(this.templateUsers({users: collection.models}));
        var total = 0;
        $('.userBeers').each(function() {
            total += Number($(this).html());
        });
        $('#totalStore #total').html(total);
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadUsersErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    },

    /**
     * Handler when an user's beer count should be increased
     * Checks the amount entered and adds it to the user's beer count
     *
     * @param e
     */
    addBeerHandler: function(e){
        let parentId = e.target.parentElement.parentElement.id;
        let amount = $('#' + parentId + ' .addOrSubstractValue').val();

        if(amount < 0){
            amount *= -1;
        }

        amount *= this.getMultiplier();

        this.putUser(parentId, amount);
    },

    /**
     * Handler when an user's beer count should be decreased
     * Checks the amount entered and substracts it from the user's beer count
     *
     * @param e
     */
    substractBeerHandler: function(e){
        let parentId = e.target.parentElement.parentElement.id;
        let amount = $('#' + parentId + ' .addOrSubstractValue').val();

        if(amount > 0){
            amount *= -1;
        }

        amount *= this.getMultiplier();

        this.putUser(parentId, amount);
    },

    /**
     * This function determines the multiplier the substract or addBeerHandler should used
     * Determined by the type of beer chosen
     *
     * @returns {*}
     */
    getMultiplier: function(){
        var multiplier = $('#selectBeer .selected').attr('class').split(' ')[0];
        console.log('mult= ' + multiplier);
        return multiplier;
    },

    /**
     * Make an AJAX call to change the beer count of an user
     *
     * @param id
     * @param amount
     */
    putUser: function(id, amount){
        $.ajax({
            dataType: "json",
            url: 'php/putUser.php',
            data: {
                id: id,
                amount: amount
            },
            complete: this.defaultCallback
        });
    },

    /**
     * Reset users to show the changes made
     *
     * @param data
     */
    defaultCallback: function(data){
        Backbone.trigger('getUsers');
    }
});

export default UsersView;