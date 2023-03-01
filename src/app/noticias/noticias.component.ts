import { Component, OnInit } from '@angular/core';
import { INoticia } from '../interfaces/INoticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticiaNueva: INoticia ={
    portada: {
      src: '',
      alt: ''
    },
    titulo: '',
    descripcion: '',
    enlace: '',
    fecha: ''
  }

  noticias: INoticia[] = [
    {
      portada: {
        src: 'https://picsum.photos/300/200',
        alt: 'Portada noticia'
      },
      titulo: 'Buenas noticias',
      descripcion: 'La gente en Honduras es mas feliz el dia de hoy',
      enlace: 'https://www.google.com/search?q=buena+noticia&sxsrf=AJOqlzW54o0F8x7Qkt3N2HU-RoPUx8F3WQ%3A1677637751546&source=hp&ei=d7j-Y_nrHquNwbkPno-kkAE&iflsig=AK50M_UAAAAAY_7Gh019pog92lRvTnypxWYjg2IpaFDA&ved=0ahUKEwi5g_bR17n9AhWrRjABHZ4HCRIQ4dUDCAg&uact=5&oq=buena+noticia&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgQIABBDOgsIABCABBCxAxCDAToICC4QgAQQsQM6EQguEIMBEMcBELEDENEDEIAEOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BwguENQCEEM6BAguEAM6BAgAEAM6CAgAELEDEIMBOgUILhCABDoICC4QgAQQ1AI6BwguEIAEEAo6BwgAEIAEEApQzANY_xBgxBJoAnAAeACAAZUBiAHuDJIBBDEuMTOYAQCgAQGwAQo&sclient=gws-wiz',
      fecha: 'Hace 2 dias'
    },
    {
      portada: {
        src: 'https://picsum.photos/300/200',
        alt: 'Portada noticia'
      },
      titulo: 'Buenas noticias 2',
      descripcion: 'La gente en Honduras es mas feliz el dia de hoy',
      enlace: 'https://www.google.com/search?q=buena+noticia&sxsrf=AJOqlzW54o0F8x7Qkt3N2HU-RoPUx8F3WQ%3A1677637751546&source=hp&ei=d7j-Y_nrHquNwbkPno-kkAE&iflsig=AK50M_UAAAAAY_7Gh019pog92lRvTnypxWYjg2IpaFDA&ved=0ahUKEwi5g_bR17n9AhWrRjABHZ4HCRIQ4dUDCAg&uact=5&oq=buena+noticia&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgQIABBDOgsIABCABBCxAxCDAToICC4QgAQQsQM6EQguEIMBEMcBELEDENEDEIAEOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BwguENQCEEM6BAguEAM6BAgAEAM6CAgAELEDEIMBOgUILhCABDoICC4QgAQQ1AI6BwguEIAEEAo6BwgAEIAEEApQzANY_xBgxBJoAnAAeACAAZUBiAHuDJIBBDEuMTOYAQCgAQGwAQo&sclient=gws-wiz',
      fecha: 'Hace 2 dias'
    },
    {
      portada: {
        src: 'https://picsum.photos/300/200',
        alt: 'Portada noticia'
      },
      titulo: 'Buenas noticias 3',
      descripcion: 'La gente en Honduras es mas feliz el dia de hoy',
      enlace: 'https://www.google.com/search?q=buena+noticia&sxsrf=AJOqlzW54o0F8x7Qkt3N2HU-RoPUx8F3WQ%3A1677637751546&source=hp&ei=d7j-Y_nrHquNwbkPno-kkAE&iflsig=AK50M_UAAAAAY_7Gh019pog92lRvTnypxWYjg2IpaFDA&ved=0ahUKEwi5g_bR17n9AhWrRjABHZ4HCRIQ4dUDCAg&uact=5&oq=buena+noticia&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgQIABBDOgsIABCABBCxAxCDAToICC4QgAQQsQM6EQguEIMBEMcBELEDENEDEIAEOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BwguENQCEEM6BAguEAM6BAgAEAM6CAgAELEDEIMBOgUILhCABDoICC4QgAQQ1AI6BwguEIAEEAo6BwgAEIAEEApQzANY_xBgxBJoAnAAeACAAZUBiAHuDJIBBDEuMTOYAQCgAQGwAQo&sclient=gws-wiz',
      fecha: 'Hace 2 dias'
    }
    ,
    {
      portada: {
        src: 'https://picsum.photos/id/200/300/200',
        alt: 'Portada noticia'
      },
      titulo: 'Cuarta noticia',
      descripcion: 'Hoy aprendi sobre vinculacion en 2 vias ',
      enlace: 'https://www.google.com/search?q=buena+noticia&sxsrf=AJOqlzW54o0F8x7Qkt3N2HU-RoPUx8F3WQ%3A1677637751546&source=hp&ei=d7j-Y_nrHquNwbkPno-kkAE&iflsig=AK50M_UAAAAAY_7Gh019pog92lRvTnypxWYjg2IpaFDA&ved=0ahUKEwi5g_bR17n9AhWrRjABHZ4HCRIQ4dUDCAg&uact=5&oq=buena+noticia&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgQIABBDOgsIABCABBCxAxCDAToICC4QgAQQsQM6EQguEIMBEMcBELEDENEDEIAEOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BwguENQCEEM6BAguEAM6BAgAEAM6CAgAELEDEIMBOgUILhCABDoICC4QgAQQ1AI6BwguEIAEEAo6BwgAEIAEEApQzANY_xBgxBJoAnAAeACAAZUBiAHuDJIBBDEuMTOYAQCgAQGwAQo&sclient=gws-wiz',
      fecha: 'Hace unos minutos'
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

  agregarNoticia(){
    this.noticias.push(this.noticiaNueva)
    this.noticiaNueva ={
      portada: {
        src: '',
        alt: ''
      },
      titulo: '',
      descripcion: '',
      enlace: '',
      fecha: ''
    }
  }
}
