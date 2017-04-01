---
layout: posts
title: Generators
---

Generators
----------

 Generators (also called simple generators for historical reasons) are relatively new to Python,
 and are (along with iterators) perhaps one of the most powerful features to come along for years. However, the 
 generators concept is rather advanced, and it may take a while before it "clicks" and you see how it works or
 how it would be useful for you. Rest assured that while generators can help you write really elegant code, you can
 certainly write any program you wish without a trace of generatos.

A generator is a kind of iterator that is defined with normal function syntax. Exactly how generators
work is best known through example. Let's first have a look at how you make them and use them, and take a peek 
under the hood.  

Making a generator
------------------

 Making a generator is simple; it's just like making a function. I'm sure you are starting to tire of 
 the good old Fibonacci sequence by now, so let me do something else.