import { BrowserModule 					} from '@angular/platform-browser';
import { NgModule 							} from '@angular/core';
import { ErrorHandler						} from '@angular/core';
import { IonicApp 							} from 'ionic-angular';
import { IonicErrorHandler 			} from 'ionic-angular';
import { IonicModule 						} from 'ionic-angular';
import { SplashScreen 					} from '@ionic-native/splash-screen';
import { StatusBar 							} from '@ionic-native/status-bar';

import { AppRoutingModule 			} from './app-routing.module';

import { AuthGuard              } from './shared/auth-guard.service';
import { AuthService            } from './shared/auth.service';
import { UserService            } from './shared/user/user.service';
import { SchoolService          } from './shared/school.service';
import { StudentsService        } from './shared/students.service';
import { AnalyticsService       } from './shared/analytics.service';
import { BooksService           } from './shared/books.service';
import { MessagingService       } from './shared/messaging.service';
import { RecommendationsService } from './shared/recommendations.service';
import { StudyGroupsService     } from './shared/study-groups.service';

import { MyApp 									} from './app.component';
import { HomePage 							} from '../pages/home/home';
import { StudentsPage 					} from '../pages/students/students';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
		StudentsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
		AppRoutingModule
  ],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
		AuthGuard,
		AuthService,
		UserService,
		SchoolService,
		StudentsService,
		AnalyticsService,
		BooksService,
		RecommendationsService,
		StudyGroupService
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  bootstrap: [IonicApp]
})
export class AppModule {}
