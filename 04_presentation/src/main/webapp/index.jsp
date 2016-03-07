<html ng-app="myapp">

<head>

    <script src="lib/angular/angular.min.js"></script>
    <script src="lib/angular/angular-resource.min.js"></script>
    <script src="js/controller.js"></script>
    <%--<script src="js/service.js"></script>--%>

</head>
<body ng-controller="productController">

<input type="text" ng-model="query" placeholder="Enter here">
<hr>
<select ng-model="order">
    <option value="stockCode">Organiser par Code</option>
    <option value="stockName">Organiser par Namse</option>
</select>
<hr>
<table cellpadding="2" cellspacing="2" border="1">
    <tr>
        <th>code</th>
        <th>id</th>
        <th>name</th>
    </tr>
    <tr ng-repeat="pr in listProducts | filter:query | orderBy:order">
        <td>{{pr.stockCode}}</td>
        <td>{{pr.stockId}}</td>
        <td>{{pr.stockName | uppercase}}</td>
    </tr>
</table>

</body>
</html>