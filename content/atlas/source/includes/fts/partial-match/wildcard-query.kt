import com.mongodb.client.model.Aggregates.limit
import com.mongodb.client.model.Aggregates.project
import com.mongodb.client.model.Projections.*
import com.mongodb.kotlin.client.coroutine.MongoClient
import kotlinx.coroutines.runBlocking
import org.bson.Document

fun main() {
    // establish connection and set namespace
    val uri = "<connection-string>"
    val mongoClient = MongoClient.create(uri)
    val database = mongoClient.getDatabase("sample_mflix")
    val collection = database.getCollection<Document>("movies")

    runBlocking {
        // define query
        val agg = Document(
            "\$search",
            Document("index", "partial-match-tutorial")
                .append(
                    "wildcard",
                    Document("path", "plot")
                        .append("query", "*new* pur*")
                )
        )

        // run query and print results
        val resultsFlow = collection.aggregate<Document>(
            listOf(
                agg,
                limit(5),
                project(fields(excludeId(), include("title", "plot")))
            )
        )
        resultsFlow.collect { println(it) }
    }
    mongoClient.close()
}