/*
Error: Invalid CSS after "var cadena, cod": expected selector, was ";"
        on line 1 of sass/materialize-src/js/bin/materialize.min.js

1: var cadena, cod;
2: var elemento = RegExp("(TIENE|TIENES|TENGO|TENES|TEN├ëS)");
3: var saludo = RegExp("(HOLA)");
4: var conversacion = RegExp("(BIEN Y TU?|BIEN Y VOS?|BIEN Y USTED?)");
5: var edad =/A├æOS/;
6: 

Backtrace:
sass/materialize-src/js/bin/materialize.min.js:1
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/scss/parser.rb:1207:in `expected'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/scss/parser.rb:1137:in `expected'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/scss/static_parser.rb:21:in `parse_selector'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:427:in `visit_rule'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/base.rb:36:in `visit'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:160:in `block in visit'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/stack.rb:79:in `block in with_base'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/stack.rb:115:in `with_frame'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/stack.rb:79:in `with_base'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:160:in `visit'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/base.rb:52:in `block in visit_children'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/base.rb:52:in `map'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/base.rb:52:in `visit_children'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:169:in `block in visit_children'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:181:in `with_environment'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:168:in `visit_children'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/base.rb:36:in `block in visit'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:188:in `visit_root'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/base.rb:36:in `visit'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:159:in `visit'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/visitors/perform.rb:8:in `visit'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/root_node.rb:36:in `css_tree'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/tree/root_node.rb:29:in `render_with_sourcemap'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/engine.rb:381:in `_render_with_sourcemap'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/engine.rb:298:in `render_with_sourcemap'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/plugin/compiler.rb:492:in `update_stylesheet'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/plugin/compiler.rb:215:in `block in update_stylesheets'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/plugin/compiler.rb:209:in `each'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/plugin/compiler.rb:209:in `update_stylesheets'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/plugin/compiler.rb:473:in `on_file_changed'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/lib/sass/plugin/compiler.rb:331:in `block in watch'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/vendor/listen/lib/listen/listener.rb:252:in `on_change'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/vendor/listen/lib/listen/listener.rb:290:in `block in initialize_adapter'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/vendor/listen/lib/listen/adapters/polling.rb:48:in `poll_changed_directories'
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/sass-3.4.23/vendor/listen/lib/listen/adapter.rb:299:in `block in start_poller'
*/
body:before {
  white-space: pre;
  font-family: monospace;
  content: "Error: Invalid CSS after \"var cadena, cod\": expected selector, was \";\"\A         on line 1 of sass/materialize-src/js/bin/materialize.min.js\A \A 1: var cadena, cod;\A 2: var elemento = RegExp(\"(TIENE|TIENES|TENGO|TENES|TEN├ëS)\");\A 3: var saludo = RegExp(\"(HOLA)\");\A 4: var conversacion = RegExp(\"(BIEN Y TU?|BIEN Y VOS?|BIEN Y USTED?)\");\A 5: var edad =/A├æOS/;\A 6: "; }
