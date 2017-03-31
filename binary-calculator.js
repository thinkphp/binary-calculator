                var curr = '', 
                    operand1 = '', 
                    operator = '', 
                    operand2 = ''

                function btn0() {

                    if( operator ) {

                        operand2 += '0'

                    } else {

                        operand1 += '0'
                    }

                    output(curr + '0') 
               
                } 

                function btn1() {
                
                    if( operator ) {

                        operand2 += '1'
 
                    } else {

                        operand1 += '1'
                    }

                     output(curr + '1') 
                }

                function btnSum() {

                     operator = '+'

                     output(curr + operator) 
                }             

                function btnMul() {

                     operator = '*'

                     output(curr + operator) 
                }             

                function btnSub() {

                     operator = '-'

                     output(curr + operator) 
                }             

                function btnDiv() {

                     operator = '/'

                     output(curr + operator) 
                }             

                function btnEql() {

                     var result = compute( parseInt(operand1, 2), operator, parseInt(operand2, 2) )

                     output( (result|0).toString( 2 ) ) 

                     operand1 = curr
                     operator = ''
                     operand2 = ''  
                }             

                function compute(a, op, b) {
 
                     a = a || 0  
                     b = b || 0

                     switch( op ) {

                            case '+':
                            return a + b

                            case '-':
                            return a - b

                            case '*':
                            return a * b

                            case '/':
                            return a / b
                     }
                }


                function output( x ) {

                    $('output').innerHTML = x

                    curr = x 
                }

                function btnClr() {

                     operand1 = ''
                     operator = ''
                     operand2 = ''
                     curr = ''
                     output('')                     
                }             


                var $ = function(id){ return document.getElementById(id) }
                var ids = ['0', '1', 'Clr', 'Eql', 'Sum', 'Sub', 'Mul', 'Div']

                ids.map(function(id){
                    $('btn'+id).onclick = window['btn' + id]
                }) 
