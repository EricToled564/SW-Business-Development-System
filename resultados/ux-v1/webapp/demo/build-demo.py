import re
src = open("cuestionario-inteligente.jsx").read()
src = src.replace('import { useState } from "react";', 'const { useState } = React;')
src = src.replace('export default function App()', 'function App()')
src += '\n\nReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));\n'
open("app.demo.jsx","w").write(src)
print("app.demo.jsx generated:", len(src), "bytes")
