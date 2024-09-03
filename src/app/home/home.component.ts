import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServesComponent } from '../serves/serves.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ServesComponent,
    ServesComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  index: number = 0;
  images: string[] = [
    '../assets/image3.jpg',
    '../assets/image1.jpg',
    '../assets/image2.jpg',
  ];
  descriptionIndex: number = 0;

  headerDescription: {
    header: string;
    description: string[];
  }[] = [
    {
      header: 'التخليص الجمركي:',
      description: [
        'التعامل مع الإجراءات الجمركية لضمان الامتثال للقوانين المحلية والدولية.',
        'إعداد الوثائق الجمركية اللازمة والإجراءات المتعلقة بالاستيراد والتصدير.',
      ],
    },
    {
      header: 'إدارة النقل:',
      description: [
        'اختيار وسائل النقل المناسبة (بحرية، جوية، برية) بناءً على احتياجات العميل.',
        'متابعة الشحنات والتأكد من وصولها في الوقت المحدد.',
      ],
    },
    {
      header: 'إدارة الطلبات:',
      description: [
        'معالجة وتنسيق طلبات العملاء من وقت استلام الطلب حتى تسليمه.',
        'توفير الدعم الفني وخدمة العملاء لضمان رضا العملاء.',
      ],
    },
  ];

  timer: any = null;

  ngOnInit(): void {
    // Optional: Automatic image change with a timer
    // this.autoChangeBackground();
  }

  changeBackground(direction: string): void {
    if (direction === 'next') {
      this.index = (this.index + 1) % this.images.length;
    } else if (direction === 'prev') {
      this.index = (this.index - 1 + this.images.length) % this.images.length;
    }
    this.descriptionIndex = this.index;
  }

  changeBackgroundByIndex(i: number) {
    this.index = i;
    this.descriptionIndex = i;
  }

  // Optional: Auto change background every few seconds
  autoChangeBackground(): void {
    this.timer = setInterval(() => {
      this.changeBackground('next');
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
  }
}
