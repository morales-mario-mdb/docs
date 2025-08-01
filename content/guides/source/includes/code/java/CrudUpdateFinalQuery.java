import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.UpdateResult;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;

import org.bson.Document;
import org.bson.conversions.Bson;

public class CrudUpdate {
    public static void main(String[] args) {
        String uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            // database and collection code goes here
            MongoDatabase db = mongoClient.getDatabase("sample_guides");
            MongoCollection<Document> coll = db.getCollection("comets");

            // update code goes here
            Bson filter = Filters.empty();
            Bson update = Updates.mul("radius", 1.60934);
            UpdateResult result = coll.updateMany(filter, update);

            // display the results of your operation
            System.out.println("Number of documents updated: " + result.getModifiedCount());
        }
    }
}
