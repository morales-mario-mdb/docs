using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using MongoDB.Driver.Search;

public class PartialWildcard 
{
    private const string MongoConnectionString = "<connection-string>";

    public static void Main(string[] args) {
        // allow automapping of the camelCase database fields to our MovieDocument
        var camelCaseConvention = new ConventionPack { new CamelCaseElementNameConvention() };
        ConventionRegistry.Register("CamelCase", camelCaseConvention, type => true);

        // connect to your Atlas cluster
        var mongoClient = new MongoClient(MongoConnectionString);
        var mflixDatabase = mongoClient.GetDatabase("sample_mflix");
        var moviesCollection = mflixDatabase.GetCollection<MovieDocument>("movies");

        // define and run pipeline
        var results = moviesCollection.Aggregate()
            .Search(Builders<MovieDocument>.Search.Wildcard(movie => movie.Plot, "*new* pur*"),
                indexName: "partial-match-tutorial")
            .Project<MovieDocument>(Builders<MovieDocument>.Projection
                .Include(movie => movie.Plot)
                .Include(movie => movie.Title)
                .Exclude(movie => movie.Id))
            .Limit(5)
            .ToList();

        // print results
        foreach (var movie in results) {
            Console.WriteLine(movie.ToJson());
        }
    }
}

[BsonIgnoreExtraElements]
public class MovieDocument {
    [BsonIgnoreIfDefault]
    public ObjectId Id { get; set; }
    public string Plot { get; set; }
    public string Title { get; set; }
}
