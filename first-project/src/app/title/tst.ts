public getConsulta() {
    // pega o valor do campo formulario via input
    const enteredId = this.form.get("funcionalAssistMesa").value;

    // facço requisição no meu serviço db.json
    this.requestContractionservice.getFuncEspec(enteredId).subscribe(
        (results: DataAssistTable[]) => {
            // Filtra os resultados com base no valor inserido
            const filteredResults = results.filter(result => result.funcional === enteredId);

            // Adiciona os resultados filtrados ao dataAssistTable
            this.dataAssistTable.push(...filteredResults);
        }
    );
}
```
