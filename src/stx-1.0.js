/**
 * Copyright (c) by 2011 Geronimo Garcia Sgritt, Simbiotic Design (c)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * A simple and short stack. This helper class aids in the creation and walking of a stack. The implementation is rather
 * generic, mantaining the most common methods, size, peek, push, pop and isEmpty.
 *
 * @author: Geronimo Garcia Sgritta
 * @version: 1.0
 */

/**
 * Creates a simple stack
 *
 * @constructor
 */
var stx = function(){
                var s = [], //The actual stack
                    l = 0; //The length, size & offset of the queue
                return {
                    /**
                     * returns the size of the stack
                     * @return size The size of the stack
                     */
                    size: function(){
                        return l>0 ? l : 0;
                    },
                    /**
                     * Returns the element that is in the top of the stack. If the stack is empty returns 'undefined'
                     * @return o An element that is at the top of the stack
                     */
                    peek: function(){
                        return s[l-1];
                    },
                    /**
                     * Pops an element and returns it. If the stack is empty returns 'undefined'
                     * @return o An element that is at the top of the stack
                     */
                    pop: function(){
                        if(l < s.length*0.9){
                             //Remove unnecessary and empty elements
                            s = s.slice(0,l);
                        }
                        return s[--l];
                    },
                    /**
                     * Push an element to the stack
                     * @param o
                     */
                    push: function(o){
                        s[l++] = o;
                    },
                    /**
                     * If the stack is empty returns true, otherwise false
                     * @return True if the stack is empty
                     *         False if there is an element
                     */
                    isEmpty: function(){
                        return l <= 0;
                    },
                    debug: function(){
                        console.log("===================================");
                        console.log("////Dumping debug information//////");
                        console.log("===================================");
                        console.log("Length of the array:       "+ s.length);
                        console.log("Length of the collection:  "+ l);
                        console.log("===================================");
                        console.log("////Collection detailed information");
                        console.log("===================================");
                        for(var i = 0; i < s.length; i++){
                            console.log("Index " + i + " contains: " + s[i] + (i < l ? ' TRUE' : ' FALSE'));
                        }
                        console.log("===================================");
                        console.log("////End of dump////////////////////");
                        console.log("===================================");
                    }
                }
            };