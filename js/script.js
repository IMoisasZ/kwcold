const fabricante = [
	{
		fabricante: 'IMBERA xxx',
	},
	{
		fabricante: 'IMBERA 1',
	},
	{
		fabricante: 'IMBERA 2',
	},
]

const itens = [
	{
		fabricante: 'IMBERA xxx',
		item: 'item 1',
	},
	{
		fabricante: 'IMBERA 1',
		item: 'item 2',
	},
	{
		fabricante: 'IMBERA 2',
		item: 'item 3',
	},
]

const listFabricantes = document.getElementById('fabricantes')

function createListFabricantes() {
	fabricante.map((fabr) => {
		listFabricantes.innerHTML += `<button
		class="btn dropdown-toggle"
		type="button"
		data-bs-toggle="dropdown"
		aria-expanded="false"
	>
		${fabr.fabricante}
	</button>`
	})
}

createListFabricantes()
