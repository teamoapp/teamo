angular.module('triangleDirective', [])
    .controller('Controller', ['$scope', function($scope) {


        $scope.something = {
            name: 'Foo'
        };

        alert('sdf');

    }])
    .directive('trianglePattern', function () {
        return {
            link: function ($scope, element, attrs) {

                var canvas = document.getElementById(attrs.id);

                console.log('canvas', canvas);
                console.log('element', element.width() );

                var canvasWidth = canvas.width = element.width();
                var canvasHeight = canvas.height = element.height();
                var ctx = canvas.getContext('2d');
                var heightScale = 1.866;

                $scope.rnd = function(min, max) {
                    return Math.floor((Math.random() * (max - min + 1)) + min);
                };

                $scope.render = function() {
                    ctx.fillStyle = 'rgb(0,0,0)';
                    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                    ctx.lineWidth = 1;

                    var hueStart = 360;
                    var triSide = 40;
                    var halfSide = triSide / 2;
                    var rowHeight = Math.floor(triSide * heightScale);
                    var columns = Math.ceil(canvasWidth / triSide) + 1;
                    var rows = Math.ceil(canvasHeight / rowHeight);

                    var col, row;
                    for (row = 0; row < rows; row++) {
                        var hue = hueStart + (row * 3);

                        for (col = 0; col < columns; col++) {

                            var x = col * triSide;
                            var y = row * rowHeight;
                            var clr;

                            if (row % 2 != 0) {
                                x -= halfSide;
                            }

                            // upward pointing triangle
                            clr = 'hsl(193, 70%, ' + $scope.rnd(35, 75) + '%)';
                            ctx.fillStyle = clr;
                            ctx.strokeStyle = clr;
                            ctx.beginPath();
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + halfSide, y + rowHeight);
                            ctx.lineTo(x - halfSide, y + rowHeight);
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke(); // needed to fill antialiased gaps on edges

                            // downward pointing triangle
                            clr = 'hsl(18, 90%, ' + $scope.rnd(47, 67) + '%)';
                            ctx.fillStyle = clr;
                            ctx.strokeStyle = clr;
                            ctx.beginPath();
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + triSide, y);
                            ctx.lineTo(x + halfSide, y + rowHeight);
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();

                        };
                    };
                };

                $scope.render();

                element.bind('click', function () {
                    $scope.render();
                });
            }
        };
    });

