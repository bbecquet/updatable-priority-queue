/* eslint-env mocha */

import { assert } from 'chai';
import PriorityQueue from '../dist/PriorityQueue.js';

describe('PriorityQueue', function() {
    let pq;

    beforeEach(function() {
        pq = new PriorityQueue();
    });

    describe('pop()', function() {
        it('returns null on an empty PriorityQueue', function() {
            assert.isNull(pq.pop());
        });
        it('returns and removes the item of mininum cost', function() {
            pq.insert('a', 5);
            pq.insert('b', 1);
            pq.insert('c', 3);
            assert.deepEqual(pq.pop(), {item: 'b', key: 1});
            assert.deepEqual(pq.pop(), {item: 'c', key: 3});
        });
    });

    describe('count', function() {
        it('returns 0 on a new PriorityQueue', function() {
            assert.equal(pq.count, 0);
        });

        it('is incremented after insertions', function() {
            pq.insert('a', 1);
            assert.equal(pq.count, 1);
            pq.insert('b', 3);
            pq.insert('c', 2);
            assert.equal(pq.count, 3);
        });

        it('is decremented after deletions', function() {
            pq.insert('a', 1);
            pq.insert('b', 2);
            pq.insert('c', 3);
            pq.pop();
            pq.pop();
            assert.equal(pq.count, 1);
            pq.pop();
            assert.equal(pq.count, 0);
        });
    });

    describe('peek()', function() {
        it('returns null on an empty PriorityQueue', function() {
            assert.isNull(pq.peek());
        });

        it('returns the item of mininum cost without removing it from the queue', function() {
            pq.insert('a', 5);
            pq.insert('b', 1);
            pq.insert('c', 3);
            // so it can be called multiple times and return the same item
            assert.deepEqual(pq.peek(), {item: 'b', key: 1});
            assert.deepEqual(pq.peek(), {item: 'b', key: 1});
            assert.deepEqual(pq.peek(), {item: 'b', key: 1});
        });
    });

    describe('updateKey()', function() {
        it('changes the order of the items when the key is greater', function() {
            pq.insert('a', 1);
            pq.insert('b', 2);
            pq.insert('c', 3);
            pq.updateKey('a', 5);
            assert.deepEqual(pq.peek(), {item: 'b', key: 2});
        });

        it('changes the order of the items when the key is lesser', function() {
            pq.insert('a', 1);
            pq.insert('b', 2);
            pq.insert('c', 3);
            pq.updateKey('c', 0);
            assert.deepEqual(pq.peek(), {item: 'c', key: 0});
        });
    });
});
