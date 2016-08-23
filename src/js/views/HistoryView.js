import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the History element
 *
 * @constructor
 */
const HistoryView = View.extend({
    templateHistory: '',

    /**
     * The constructor for HistoryView, loads all records into a template
     *
     */
    initialize: function ()
    {
        //Set templates to use later on
        this.templateHistory = _.template(this.$('#template-history').html());

        this.loadHistory();

        //Listen to global events to refresh the users
        this.listenTo(Backbone,'getUsers',this.loadHistory);
    },

    /**
     * This function fetches all history records through the collection
     *
     * @param data
     */
    loadHistory: function(data){
        console.log('fetching history');
        this.collection.fetch({
            success: (collection) => this.loadHistorySuccessHandler(collection),
            error: (collection, response) => this.loadHistoryErrorHandler(collection, response)
        });
    },

    /**
     * This function is called when the fetching was a success, adding 50 history records to the template
     *
     * @param collection
     */
    loadHistorySuccessHandler: function(collection){
        this.$el.html(this.templateHistory({history: collection.models}));

        $("#history tr:odd").find('td').css({'background': 'rgba(0, 0, 0, 0.4)'})
    },

    /**
     * A currently unused error handler, called when the history fetching has failed
     *
     * @param collection
     * @param response
     */
    loadHistoryErrorHandler: function(collection, response){
        console.log('history loading error');
    }
});

export default HistoryView;