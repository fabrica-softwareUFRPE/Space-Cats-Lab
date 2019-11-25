import jsPDF from 'jspdf'

export default function pdf() {

var doc = new jsPDF();

return (

doc.text("hello", 10, 10),
doc.save('a4.pdf')
    

    )
}