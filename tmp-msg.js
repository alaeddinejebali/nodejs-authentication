Etape 1: Modifier dans "dialog-body.component.html"

<form (submit)="loginUser($event)">
  <mat-dialog-actions align="end">
    <div *ngIf="!IsChecked && IsChecked !== null" style="color: red;">Veuillez accepter les Condition Générale!</div>
    <mat-checkbox [disabled]="!hasScrollUntilTheEnd" name="terms">Check me!</mat-checkbox>
    <button mat-button mat-dialog-close>Cancel</button>
    <button mat-button cdkFocusInitial>Valider</button>
  </mat-dialog-actions>
</form>


Etape 2: Modifier dans "dialog-body.component.ts"

- vers ligne 14, changer: IsChecked = null;
- puis 
loginUser(e) {
  e.preventDefault();
  this.IsChecked = e.target.terms.checked;
  console.log('=========> this.IsChecked:', this.IsChecked);
  if (this.IsChecked === true) {
    this.user.setUserLoggedIn();
    this.user.setUsername('admin');
    this.router.navigate(['home']);
    this.close();
  }
}
