using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using MongoDB.Driver.Search;

public class CompoundFunctionExample
{
    private const string MongoConnectionString = "<connection-string>";

    public static void Main(string[] args)
    {
        // allow automapping of the camelCase database fields to our MovieDocument
        var camelCaseConvention = new ConventionPack { new CamelCaseElementNameConvention() };
        ConventionRegistry.Register("CamelCase", camelCaseConvention, type => true);

        // connect to your Atlas cluster
        var mongoClient = new MongoClient(MongoConnectionString);
        var mflixDatabase = mongoClient.GetDatabase("sample_mflix");
        var moviesCollection = mflixDatabase.GetCollection<MovieDocument>("movies");

        var scoreFunction = Builders<MovieDocument>.SearchScore.Function(Builders<MovieDocument>.SearchScoreFunction.Add(Builders<MovieDocument>.SearchScoreFunction.Path(movie => movie.Imdb.Rating, 2), Builders<MovieDocument>.SearchScoreFunction.Relevance()));
        // define and run pipeline
        var results = moviesCollection.Aggregate()
            .Search(Builders<MovieDocument>.Search.Compound()
                .Must(Builders<MovieDocument>.Search.Range(movie => movie.Year, SearchRangeBuilder.Gte(2013).Lte(2015)))
                .Should(Builders<MovieDocument>.Search.Text(movie => movie.Title, "snow", score: scoreFunction)),
                new SearchHighlightOptions<MovieDocument>(movie => movie.Title),
                indexName: "default")
            .Project<MovieDocument>(Builders<MovieDocument>.Projection
                .Include(movie => movie.Genres)
                .Include(movie => movie.Title)
                .Include(movie => movie.Year)
                .Exclude(movie => movie.Id)
                .MetaSearchScore(movie => movie.Score)
                .MetaSearchHighlights("highlights"))
            .Limit(10)
            .ToList();
        
        // print results
        foreach (var movie in results)
        {
            Console.WriteLine(movie.ToJson());
        }
    }
}

[BsonIgnoreExtraElements]
public class MovieDocument
{
    [BsonIgnoreIfDefault]
    public ObjectId Id { get; set; }
    public string [] Genres { get; set; }
    public IMDB Imdb { get; set; }
    public string Title { get; set; }
    public int Year { get; set; }
    [BsonElement("highlights")]
    public List<SearchHighlight> Highlights { get; set; }
    public double Score { get; set; }
}

[BsonIgnoreExtraElements]
public class IMDB
{
    public double Rating { get; set; }
}
