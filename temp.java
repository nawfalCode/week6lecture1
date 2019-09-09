class User{
    private String name;
    private int age;
    String unit;
    private String address;

public void setName(String newName){
    this.name="Hi "+newName;// do some pre processing
}
public void setAge(int newAge){
        if(age>18 && age<80)
        age=newAge;
        else System.out.println("Invalid Data");
    }
}


User user=new User();
