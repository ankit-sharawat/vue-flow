<template>
 <div id="chart">
 </div>
</template>
<script>
import '/home/ankit/Documents/projects/cnvrg_task/node_modules/jquery/dist/jquery.js'
import '/home/ankit/Documents/projects/cnvrg_task/node_modules/jquery.flowchart/jquery.flowchart.js'

import jquery from 'jquery'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
$('#chart').flowchart({
  data: {
    operators: {
      operator1: {
        top: 20,
        left: 20,
        properties: {
          title: 'Operator 1',
          inputs: {},
          outputs: {
            output_1: {
              label: 'Output 1'
            }
          }
        }
      },
      operator2: {
        top: 80,
        left: 300,
        properties: {
          title: 'Operator 2',
          inputs: {
            input_1: {
              label: 'Input 1'
            },
            input_2: {
              label: 'Input 2'
            }
          },
          outputs: {}
        }
      }
    },
    links: {
      link_1: {
        fromOperator: 'operator1',
        fromConnector: 'output_1',
        toOperator: 'operator2',
        toConnector: 'input_2'
      }
    }
  }
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
