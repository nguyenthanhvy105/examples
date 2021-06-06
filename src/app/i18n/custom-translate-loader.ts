import {CloudTransLoader} from 'inet-ui';
import {HttpClientService} from "inet-core";
import {Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";
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
            return of(this.translation);
        }
        this.storageKey = `${this.storageKey}_${lang}`;
        if (sessionStorage && sessionStorage.getItem(this.storageKey)) {
            this.translation = JSON.parse(sessionStorage.getItem(this.storageKey));
            return of(this.translation);
        }
        return this.http.getJSON(`./assets/i18n/json/${lang}.json`)
            .pipe(
                tap((response: any) => {
                    this.translation = {...this.getResourceByLang(lang), ...response};
                }),
                map(() => {
                    return this.translation;
                })
            );
    }
}
