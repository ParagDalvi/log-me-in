import jsPDF from 'jspdf';
import 'jspdf-autotable';



export function createPdf(data) {
    var doc = new jsPDF();

    doc.setFontSize(9);
    doc.text('Security copy/Employee copy', 160, 10)


    var imageData = 'data:image/png;base64,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'

    doc.addImage(imageData, 'PNG', 85, 10, 47.4, 12.6)


    doc.setFontSize(12);
    doc.text('LogMeIn Systems India Pvt Ltd, No. 5, 1st Floor, Prestige Khoday Towers,\nRaj Bhavan Road, Bangalore, Karnataka - 560001',
        104,
        25,
        'center'
    );


    doc.setFontSize(15);
    doc.setFontType('bold');
    doc.text('Authorization for taking out material', 60, 45);


    doc.setFontSize(15);
    doc.setFontType('noramal');
    doc.text(`Gate pass number: ${data.passNo}`, 10, 65);



    doc.text(`Date: ${data.products[0].date}`, 140, 65);


    doc.text(`To,\n${data.name}`, 10, 85);



    const bodyOfProducts = data.products.map((product) => {
        return [product.id, product.description, product.date, product.returnDate, product.qty, product.type];
    });
    doc.autoTable({
        theme: 'grid',
        headStyles: { fillColor: '#808080' },
        startY: 105,
        head: [['Serial No.', 'Description', 'Issue Date', 'Return Date', 'Qantity', 'Type']],
        body: bodyOfProducts,
    });



    doc.autoTable({
        theme: 'grid',
        headStyles: { fillColor: '#808080' },
        startY: 180,
        body: [
            ['Requested by', data.name,],
            ['Coordinated by', data.cordinatedBy,],
            ['Carried by', data.carriedBy,],
            ['Carried by sign', '',],
            ['Verified by', data.verifiedBy,],
        ],
    });



    doc.text(`Authorised Signature\n\n\n\nFacilities`, 170, 250, 'center');

    doc.save(`Pass No - ${data.passNo}.pdf`);
}
