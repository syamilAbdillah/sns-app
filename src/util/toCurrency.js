export default function toCurrency(number){
	let stringNum = number
	return new Intl.NumberFormat().format(number)
}