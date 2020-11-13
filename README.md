#UIIP REST API Project Work Frontend
Questo applicativo nodejs è stato creato per offrire contenuto demo al project work

###CONFIGURAZIONE
Clona la repository in una cartella del pc, dopodiché apri la riga di comando (`terminale` su OSX o `cmd` su Windows, oppure il terminale di visual studio code) ed esguire:
```
npm install
```

Per avviare questo mini server nodeJS, eseguire 
```
npm start
```

Una volta avviato il server, visitare l'indirizzo web <a href="http://localhost:4000/" target="_blank">http://localhost:4000/</a> da cui poter estrapolare i contenuti interessati

###ENDPOINTS DISPONIBILI
<table>
<tr>
    <td><a href="http://localhost:4000/products" target="_blank">http://localhost:4000/products</a></td>
    <td>Ritorna una lista di tutti i prodotti presenti in magazzino</td>
</tr>
<tr>
    <td><a href="http://localhost:4000/products/1" target="_blank">http://localhost:4000/products/:id</a></td>
    <td>Ritorna un prodotto con un id uguale a <b>:id</b></td>
</tr>
<tr>
    <td><a href="http://localhost:4000/products/Gadget" target="_blank">http://localhost:4000/products/:category</a></td>
    <td>Ritorna una lista di prodotti con una categoria uguale o simile al valore <b>:category</b></td>
</tr>
<tr>
    <td><a href="http://localhost:4000/products/outofstock" target="_blank">http://localhost:4000/products/outofstock</a></td>
    <td>Ritorna una lista di tutti i prodotti con quantità pari a zero</td>
</tr>
<tr>
    <td><a href="http://localhost:4000/employees" target="_blank">http://localhost:4000/employees</a></td>
    <td>Ritorna la lista di tutti i dipendenti</td>
</tr>
<tr>
    <td><a href="http://localhost:4000/employees/1" target="_blank">http://localhost:4000/employees/:id</a></td>
    <td>Ritorna un dipendente con un id uguale a <b>:id</b></td>
</tr>
</table>