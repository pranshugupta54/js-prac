#include <iostream>
using namespace std;

bool cons(char c){
    cout << c << "YYYY" << endl;
    if(c == 'a' || c == 'e' || c == 'i' || c== 'o' || c== 'u'){
        return false;
    }
    cout << "SSS";
    return true;
}

int main() 
{
    // int t;
    // cin>>t;
    // for (int i=1;i<=t;i++){
        int n;
      // cout<<"enter the size of string ";
      // cin>>n;
      n = 10;
       string str;
      // cout<<endl<<"enter string ";
      // cin>>str;
      str = "hhjjwnohab";
      if(true){
        cout <<"ok" << cons(str[1]) << "ok" << endl;
      }
       if(n<4){
        cout<<endl<<"YES";
       }
       for (int j=0;j<n - 2;j++){
          if(cons(str[j]) && cons(str[j+1]) && cons(str[j+2]) && cons(str[j+3])){
          cout<<"YES";
          cout << j;
          cout << str[j] << str[j+1];
          // break;
          return 0;
          }
       }
       cout << "NO";
      // else {
      //   cout<<"NO";
      // }
       
    // }
    return 0;
}
// bbbb = YES