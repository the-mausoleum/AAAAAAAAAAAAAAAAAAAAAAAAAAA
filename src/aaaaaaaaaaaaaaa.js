(function () {
    'use strict';

    function walk(root) {
        var nodes = [];

        var loop = function (root) {
            do {

                nodes.push(root);

                if (root.hasChildNodes()) {
                    loop(root.firstChild);
                }

            } while (root = root.nextSibling);
        };

        loop(root);

        return nodes;
    }

    function aaaaaaaaaaaaaaa(nodes) {
        nodes.forEach(function (node) {
            node.text = (node.text || '').replace(/[a-z]/gi, 'A');
        });
    }
    
    aaaaaaaaaaaaaaa(walk(document.body));
})();
