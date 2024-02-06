// Énonce: Soit la classe abstraite Employé caractérisée par attributs suivants : Matricule Nom Prénom Date de naissance La classe Employé doit disposer des méthodes suivantes : un constructeur d’initialisation des propriétés pour les différents attributs la méthode Tostring qui retourne les informations d’un employé une méthode abstraite GetSalaire.  Un cadre est un employé qui se caractérise par un indice. Le cadre a un salaire qui dépend de son indice : o1 : salaire mensuel 1300 D o2 : salaire mensuel 1500 D o3 : salaire mensuel 1700 D o4 : salaire mensuel 2000 D  Un patron est un employé qui se caractérise par un chiffre d’affaire et un pourcentage. Le chiffre d’affaire est commun entre les patrons. Le patron a un salaire annuel qui est égal à x% du chiffre d'affaire : Salaire = CA*pourcentage/100 Travail à faire: 1.Créer la classe abstraite Employé. 2.Créer la classe Cadre et la classe Patron qui héritent de la classe Employé, et prévoir les Constructeurs et la méthode ToString de chacune des 2 classes. 
// 3.Implémenter la méthode GetSalaire() qui permet de calculer le salaire pour chacune des classes

using System;
public class Employee{
    private int matricule;
    private string nom;
    private string prenom;
    private DateTime dateNaissance;
    public Employee(int matricule, string nom, string prenom, DateTime dateNaissance){
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
    public int Matricule{
        get{return matricule;}
        set{matricule = value;}
    }
    public string Nom{
        get{return nom;}
        set{nom = value;}
    }
    public string Prenom{
        get{return prenom;}
        set{prenom = value;}
    }
    public DateTime DateNaissance{
        get{return dateNaissance;}
        set{dateNaissance = value;}
    }
    public override string ToString(){
        return "Matricule: "+matricule+"\nNom: "+nom+"\nPrenom: "+prenom+"\nDate de naissance: "+dateNaissance;
    }
    public virtual double GetSalaire(){
        return 0;
    }

}

public class Cadre : Employee {
    private int indice;
    public Cadre(int matricule, string nom, string prenom, DateTime dateNaissance, int indice) : base(matricule, nom, prenom, dateNaissance){
        this.indice = indice;
    }
    public int Indice{
        get{return indice;}
        set{indice = value;}
    }
    public override string ToString(){
        return base.ToString()+"\nIndice: "+indice;
    }
    public override double GetSalaire(){
        switch(indice){
            case 1: return 1300;
            case 2: return 1500;
            case 3: return 1700;
            case 4: return 2000;
            default: return 0;
        }
    }
}









public class Patron : Employee {
    
}


class Program {
    void static main (){
        Console.ReadLine("donner le matricule: ");
        int matricule = int.Parse(Console.ReadLine());
        Console.ReadLine("donner le nom: ");
        string nom = Console.ReadLine();
        Console.ReadLine("donner le prenom: ");
        string prenom = Console.ReadLine();
        Console.ReadLine("donner la date de naissance: ");
        DateTime dateNaissance = DateTime.Parse(Console.ReadLine());
        Console.ReadLine("donner l'indice: ");
        int indice = int.Parse(Console.ReadLine());
        Cadre c = new Cadre(matricule, nom, prenom, dateNaissance, indice);
        Console.WriteLine(c.ToString());
        Console.WriteLine("Salaire: "+c.GetSalaire());
        
    }
}