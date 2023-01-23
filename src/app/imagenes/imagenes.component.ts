import { Component } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent {
  arrayNature: any[] = [{
    imgs : 'https://img.freepik.com/foto-gratis/fondo-mar-espumoso_657883-95.jpg?w=2000',
},{
    imgs : 'https://images.ecestaticos.com/UfJ25_9cHaPFUTJLzb9yfTf1G_4=/236x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F940%2F305%2F1eb%2F9403051eb522f02effe529c57e580d36.jpg',
},{
  imgs : 'https://media.traveler.es/photos/61376bc8b57001fc862c8254/master/w_1600,c_limit/146790.jpg',
},{
  imgs : 'https://i0.wp.com/www.diariosustentable.com/wp-content/uploads/2020/07/bosques-arboles.jpg?w=800&ssl=1'
}]
}
