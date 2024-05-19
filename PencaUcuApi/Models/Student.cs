using System.ComponentModel.DataAnnotations;

namespace PencaUcuApi.Models;
public class Student
{
    [Key]
    public string StudentId { get; set; }
    public int Score { get; set; }
    public Student(string studentId, int score)
    {
        StudentId = studentId;
        Score = score;
    }
}
