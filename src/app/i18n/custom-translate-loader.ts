import {CloudTransLoader} from 'inet-ui';
import {HttpClientService} from "inet-core";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
export class CustomTranslateLoader extends CloudTransLoader {
    static instance: CustomTranslateLoader = null;
    private translation: any;
    private storageKey = 'examples_translation';
    constructor(private http: HttpClientService) {
        super();
        return CustomTranslateLoader.instance = CustomTranslateLoader.instance || this;
    }
    /**
     * Gets the translations from the server
     */
    getTranslation(lang: string): Observable<any> {
        if (this.translation) {
            return Observable.of(this.translation);
        }
        this.storageKey = `${this.storageKey}_${lang}`;
        if (sessionStorage && sessionStorage.getItem(this.storageKey)) {
            this.translation = JSON.parse(sessionStorage.getItem(this.storageKey));
            return Observable.of(this.translation);
        }
        /*
        if (environment.production) {
            // group : The name of your package (application)
            return this.http.getJSON(iNet.getPUrl('message/keys'), {group: 'examples'}).map((response: any) => {
                this.translation = {...this.getResourceByLang(lang), ...this.convertResourceToObject(response['items'] || [])};
                if (sessionStorage) {
                    sessionStorage.setItem(this.storageKey, JSON.stringify(this.translation));
                }
                return this.translation;
            });
        } else {
            const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
            return this.http.get(`./assets/i18n/common_${lang}.properties`,  { headers, responseType: 'text'}).map((response: any) => {
                this.translation = {...this.getResourceByLang(lang), ...this.convertPropertiesToObject(response)};
                return this.translation;
            });
        }
        */
        return this.http.getJSON(`./assets/i18n/json/${lang}.json`).map((response: any) => {
            this.translation = {...this.getResourceByLang(lang), ...response};
            return this.translation;
        });

    }
}
