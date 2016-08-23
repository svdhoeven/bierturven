<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Bier Turven</title>
    <link href="css/main.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <header>
        <div id="selectBeer">
            <script id="template-beer" type="text/template">
                <% _.each(beers, function(beer, index, list){ %>
                <div id="<%= beer.get('type')%>" class="<%= beer.get('beer')%>">
                    <span class="beerType"><%= beer.get('type')%></span>
                </div>
                <% }); %>
            </script>
        </div>
        <div id="lock">
            <!-- element to lock the beer choice -->
        </div>
    </header>
    <div id="totalStore"><span>Totale voorraad</span><span id="total">0</span></div>
    <main id="users">
        <script id="template-error" type="text/template">
            <span class="error"><%= message %></span>
        </script>
        <script id="template-users" type="text/template">
            <% _.each(users, function(user, index, list){ %>
            <div id="<%= user.get('id') %>" class="user">
                <div class="userStats">
                    <div class="userName"><%= user.get('name') %></div>
                    <div class="userBeers"><%= user.get('beer') %></div>
                </div>
                <div class="userControls">
                    <input type="text" class="addOrSubstractValue" placeholder="Aantal" value="1"/>
                    <div class="substractBeer">Gedronken</div>
                    <div class="addBeer">Gekocht</div>
                </div>
            </div>
            <% }); %>
        </script>
    </main>
    <aside>
        <table id="history">
            <thead>
                <tr>
                    <td></td>
                    <td>Datum</td>
                    <td>Gebruiker</td>
                    <td>Hoeveelheid</td>
                </tr>
            </thead>
            <script id="template-history" type="text/template">
                <% _.each(history, function(record, index, list){ %>
                <tr>
                    <td><%= index + 1 %></td>
                    <td><%= record.get('date') %></td>
                    <td><%= record.get('name') %></td>
                    <td><%= record.get('amount') %> bier</td>
                </tr>
                <% }); %>
            </script>
        </table>
    </aside>
    <aside>
        <section id="addUser">
            <h2>Gebruiker toevoegen</h2>
            <form id="addUserForm">
                <input type="text" id="addUserName" placeholder="Naam"/>
                <input type="submit" id="submitAddUser" value="Toevoegen"/>
            </form>
        </section>
        <section id="deleteUser">
            <h2>Gebruiker verwijderen</h2>
            <form id="deleteUserForm">
                <input type="text" id="deleteUserName" placeholder="Naam"/>
                <input type="submit" id="submitDeleteUser" value="Verwijderen"/>
            </form>
        </section>
    </aside>
    <script type="text/javascript" src="dist/bundle.js"></script>
</body>
</html>