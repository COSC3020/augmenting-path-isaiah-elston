const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = {'foo': {'boo': 7},
    'boo': {'foo': 3, 'bar': 2},
    'bar': {'boo': 4}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == JSON.stringify(['foo', 'boo', 'bar']));

var graph = {'foo': {'boo': 7, 'd': 4},
    'boo': {'e': 3},
    'd': {'bar': 4},
    'e': {'foo': 1},
    'bar': {'foo': 2}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == JSON.stringify(['foo', 'd', 'bar']));

var graph = {'foo': {},
    'bar': {'foo': 1}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == '[]');

var graph = {'foo': {},
    'bar': {'foo': 1}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'foo')) == JSON.stringify(['foo']));

var graph = {'gig': {'iddy': 1, 'aloo': 2},
    'iddy': {'igidy': 3, 'woo': 4}, 
    'igidy': {'goo': 69, 'woo': 42},
    'woo': {'boo': 800}}

assert(JSON.stringify(augmentingPath(graph, 'gig', 'boo')) == JSON.stringify(['gig', 'iddy', 'woo', 'boo']))
assert(JSON.stringify(augmentingPath(graph, 'gig', 'goo')) == JSON.stringify(['gig', 'iddy', 'igidy', 'goo']))

var graph = {'A': {'H': 10, 'B': 9, 'G': 5},
    'H': {}, 
    'B': {'C': 3, 'D': 8},
    'G': {}, 
    'C': {'D': 11},
    'D': {'A': 90}}

assert(JSON.stringify(augmentingPath(graph, 'A', 'D')) == JSON.stringify(['A', 'B', 'D']))
assert(JSON.stringify(augmentingPath(graph, 'B', 'A')) == JSON.stringify(['B', 'D', 'A']))
assert(JSON.stringify(augmentingPath(graph, 'D', 'C')) == JSON.stringify(['D', 'A', 'B', 'C']))

var graph = {}
assert(JSON.stringify(augmentingPath(graph, 'dne', 'null')) == JSON.stringify([]))
