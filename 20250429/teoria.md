### XPATH
Es un lenguaje para navegar por un documento XML
Se utiliza para:
- Seleccionar nodos/valores dentro de un documento XML
- Para filtrar y aplicar condiciones para la selección de elementos
- Se usa en lenguajes JS y PHTYON

### ESTRUCTURA
Cada nodo puede ser:
- Elemento (<nombre>)
- Atributo (id="1")
- Texto (Luis)
- Comentarios, espacios ...

### TIPOS DE NODOS
- Elementos -> <persona>
- Atributo -> @id
- Texto -> text()
- Raiz del documento -> /

### TIPO DE SINTAXIS BASICA DE XPATH
- / Selecciona desde la raiz del documento
- // Selecciona desde cualquier lugar del documento
- /etiqueta1/etiqueta2 Nodo etiqueta2 dentro de etiqueta1
- etiqueta[n] Seleccionar el n-esimo nodo con esa etiqueta
- @atributo Selecciona un atributo
- [condicion] Aplicando un filtro/condicion
- text() Devuelve el contenido textual de un nodo

## XSLT
El objetivo del XSLT es transformar documentos XML en otros formatos, por ejemplo:
- Otro XML (con diferente estructura)
- HTML (para visualizacion en web)
- Texto plano (TXT)
- Json (mas avanzado)

''' xml


'''

### COMPONENTES PRINCIPALES DE XSLT
- <xsl:stylesheet> Etiqueta raiz obligatoria
- <xsl:template> Define una regla de transformacion
- <xsl:value-fo> Extrae el valor textual de un nodo que sea seleccionado con XPATH
- <xsl:for-each> Recorre nodos (lista)
- <xsl:if> Permite aplicar condiciones logicas
- match, select Se usa para indicar que nodo seleccionamos con XPath

- En etiquetas de salidas de tipo <htnl>, <body>, <p>, <h2>, no llevan el xsl mientras que en instrucciones del tipo xsl como por ejemplo template, for-each, value-of si deben ir con la etiqueta <xsl:...>